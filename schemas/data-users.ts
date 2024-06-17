import { z } from "zod";
import { cedulaValidation } from "@/lib/utils";
import { Description } from "@radix-ui/react-toast";

export const dataUserSchema = z.object({
  name: z.string().min(2, "Nombre es requerido"),
  secondName: z.string().min(2, { message: "Apellido es requerido" }),
  lastName: z.string().min(2, { message: "Apellido es requerido" }),
  secondLastName: z.string().min(2, { message: "Apellido es requerido" }),
  dni: z
    .string()
    .regex(/^\d{10}$/)
    .refine((cedula: string) => cedulaValidation(cedula), {
      message: "Cedula invalida",
    }),
  birthDate: z.date(),
  province: z.string().min(2, { message: "Provincia es requerido" }),
  canton: z.string().min(2, { message: "Canton es requerido" }),
  parish: z.string().min(2, { message: "Parroquia es requerido" }),
  district: z.string().min(2, { message: "Barrio es requerido" }),
  princialStreet: z.string().min(2, { message: "Calle es requerido" }),
  secondaryStreet: z
    .string()
    .min(2, { message: "Calle secundaria es requerido" }),
  numberHuouse: z
    .string()
    .min(2, { message: "Numero de domicilio es requerido" }),
  reference: z.string().min(5, { message: "Referencia es requerido" }),
  telephone: z.string().min(7, { message: "Telefono es requerido" }),
  phone: z.string().min(10, { message: "Celular es requerido" }),
  email: z
    .string()
    .min(10, { message: "Correo es requerido" })
    .email({ message: "Correo invalido" }),
  userName: z.string().min(5, { message: "Usuario es requerido" }),
  password: z.string().min(10, { message: "Contraseña es requerido" }),
  crendential: z.string().min(5, { message: "Credencial es requerido" }),
  Description: z.string().min(10, { message: "Descripcion es requerido" }),
});

export type DataUserType = z.infer<typeof dataUserSchema>;
