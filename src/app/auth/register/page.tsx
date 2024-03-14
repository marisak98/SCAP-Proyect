"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username  must be least 2 characteres."
  }),
  email: z.string().regex(new  RegExp('^((?![.])[A-Z0-9_+-]+(?:\\.[A-Z0-9_+-]+)*@[A-Z0-9-]+(?:\\.[A-Z0-9-]+)*(?:\\.[A-Z]{2,}))$', 'i'), {
    message: "Email is not valid."
  }),
  password: z.string().min(8, {
    message: " Password must be least 8 characteres.",
  }),
  confirmPassword: z.string().min(8),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if(confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ["confirmPassword"],
    });
  }
});


export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>){
    console.log(values);
  }
  return(
  <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
        <div className="bg-white text-white flex items-center justify-center flex-col">
          <div className="relative hidden md:block">
            <Image
              className="object-cover"
              src="/logoLogin.png"  // Remove "../../public" and start with a leading slash "/"
              alt="bg-image"
              width={600}  // Set the width of the image
              height={600} // Set the height of the image
            />
          </div>
        </div>
        {/*Parte Izquierda*/}
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4">
          <h1 className="text-3xl font-semibold ">Register</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) =>(
                    <FormItem>
                      <FormLabel className="text-slate-500 mb-2 block text-sm">Username</FormLabel>
                      <FormControl>
                        <Input placeholder="example123" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your public username.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500 mb-2 block text-sm">Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormDescription>
                Enter your public email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500 mb-2 block text-sm">Password</FormLabel>
              <FormControl>
                <Input placeholder="*********" {...field} type="password" />
              </FormControl>
              <FormDescription>
                Enter your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-500 mb-2 block text-sm">Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="*********" {...field} type="password" />
              </FormControl>
              <FormDescription>
                Enter your confirm password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"  >Sign Up</Button>
               
            </form>
          </Form>
            
          </div>
           <span className="mt-4 text-xs text-slate-200">
                    @2024 All rights reserved.
                </span>
        </div>
      </div>
    </main>
  );
}

