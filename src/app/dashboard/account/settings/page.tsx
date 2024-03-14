"use client"
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CiValidation from '@/lib/utils/ciValidation';
import * as z from "zod";
import { UserDataScheme } from "../../../../../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, TrashIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Label } from "@/components/ui/label";

export default function Settings() {

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition(); 


  const form = useForm<z.infer<typeof UserDataScheme>>({
  resolver: zodResolver(UserDataScheme),
  defaultValues: {
      DNI: "",
      firstName: "",
      secondName: "",
      firstSurname: "",
      secondSurname: "",
      dataOfBirtth: new Date(),
      email: "",
      password: "",
      landline: "",
      phone: "",
      province: "",
      country: "",
      parish: "",
      distric: "",
      mainStreet: "",
      sideStreet: "",
      numberHose: "",
      reference: "",
    },
});

  async function onSubmit (values: z.infer<typeof UserDataScheme> ){
     console.log(values);
     setError("");
     setSuccess("");

    startTransition(()=> {
    })
  }

 return(
    <ScrollArea className="h-[780px] w-full rounded-md border p-4">
 <div>
      <div className="space-y-1">
        <h4 className="text-sm font-semibold leading-none">Public Information</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4 sm:my-2" />
      <div className="flex h-80 space-x-4 space-y-5 text-sm ">
        <div className="px-20 my-4 w-full">
          <h4 className="text-sm font-semibold leading-none">Profile Avatar</h4>
          <div className="flex items-center my-10">
            <Avatar className="h-[130px] w-[130px] mr-4">
              <AvatarImage src="https://github.com/shadcn.png" />
               <AvatarFallback>CN</AvatarFallback>
             </Avatar>
               </div>
         <div className="grid gap-1.5 flex max-w-sm w-full space-x-4 space-y-4">
              <Label htmlFor="file">Subir Foto</Label>
              <Input 
                type="file" 
                id="image"
                placeholder="Avatar"
              >
              </Input>
            <Button>
               <TrashIcon className="mr-2 h-4 w-4" /> Delete
              </Button>
            <span>Dimession Image</span>
          </div>
           <Separator className="my-4"/> 
          <div className="my-4">
            <h3 className="text-sm font-semibold leading-none">General Information</h3>
          </div>
          <div className="space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                  control={form.control}
                  name="DNI"
                  render={({ field }) => (
                  <FormItem>
                        <FormLabel>Cedula</FormLabel>
                       <FormControl>
                          <Input 
                            {...field}
                            disabled={isPending}
                            placeholder="1728393844"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                  )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primer Nombre</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Joe"/>
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="secondName"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Segundo Nombre</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Jose"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="firstSurname"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Primer Apellido</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Gonzales"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="secondSurname"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Segundo Apellido</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Suarez"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dataOfBirtth"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Fecha de Nacimiento</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ): (
                                <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date <  new Date("1900-1-1")
                            }
                            initialFocus
                            />
                          </PopoverContent>
                        </Popover> 
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Correo Electronico</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="jose.joe@example.com"
                          type="email"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          type="password"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirmar Contraseña</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          type="password"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Telefono Movil</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="0987654321"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="landline"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Telefono Convencional</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="2110198"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Provincia</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Canton</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="parish"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Parroquia</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="distric"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Barrio</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="mainStreet"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Calle Princial</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Av. Siempre Viva"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="sideStreet"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Calle Secundaria</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="numberHose"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Numero de Casa</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="reference"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Referencia Recidencial</FormLabel>
                        <FormControl>
                          <Input
                          {...field}
                          disabled={isPending}
                          placeholder=""
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="w-full items-center flex">
                <Button className="w-[240px]">Save Changes</Button>
                </div>
              </form>
            </Form>
          </div>
              </div>

              <Separator orientation="vertical" />
        <div className="space-y-1 w-full ">
          <h4 className="text-sm font-semibold leading-none"> Account Security </h4>
        </div>
      </div>
    </div>  
   </ScrollArea>
 ); 
}
