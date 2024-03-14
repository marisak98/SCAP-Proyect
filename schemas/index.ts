import * as z from 'zod';
import CiValidation from '@/lib/utils/ciValidation';

export const UserDataScheme = z.object({
//cedula
  DNI: z.string().regex(/^\d{10}$/).refine((ci: string) => CiValidation(ci),{
    message: "DNI invalid"
  }),
  //Primer Nombre
  firstName: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
   //Segundo Nombre
  secondName: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
   //Primer Apellido
  firstSurname: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
   //Segundo Apellido
  secondSurname: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
  //Fecha de Nacimiento
  dataOfBirtth: z.date({
    required_error: "A date of birth is required"
  }), 

  //Correo Electronico
  email: z.string().regex(new RegExp('^((?![.])[A-Z0-9_+-]+(?:\\.[A-Z0-9_+-]+)*@[A-Z0-9-]+(?:\\.[A-Z0-9-]+)*(?:\\.[A-Z]{2,}))$', 'i'), 
    {
      message: "Email is invalid",
    }),
  //Contraseña 
  password: z.string().min(8,{
    message: "Minimun 8 characters required",
  }),
  //Confimar Contraseña 
  confirmPassword: z.string().min(8),
  //Telefono Convencional
  landline: z.string().regex(new RegExp(/^\(?(0[2-7]|0[9])-?\d{3}-?\d{4}$/), {
    message: "The number phone is invalid",
  }),
  //Telefono Movil
  phone: z.string().regex(new RegExp(/^0(9\d{8})$/), {
    message: "The number phone is invalid"
  }),
  //Provincia
  province: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
  //Canton
  country: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
  //Parroquia
  parish: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
  //Barrio
   distric: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
  //Calle Pricipal
   mainStreet: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
  //Calle Secundaria
   sideStreet: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
   //Numer de Casa
   numberHose: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
  //Referencia
   reference: z.string().min(2, {
    message: "Minimun 2 characters required",
  }),
}).superRefine(({ confirmPassword, password }, ctx) => {
     if(confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      })
    }
});


