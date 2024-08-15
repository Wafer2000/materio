import { date, number, object, string } from "zod";

export const LoginSchema = object({
  email: string({ required_error: "Se requiere un correo electrónico" })
    .min(1, "Se requiere un correo electrónico")
    .email("Correo electrónico no válido"),
  password: string({ required_error: "Se requiere una contraseña" })
    .min(1, "Se requiere una contraseña")
    .min(8, "La contraseña debe tener más de 8 caracteres")
    .max(32, "La contraseña debe tener menos de 32 caracteres"),
});

export const RegisterSchema = object({
  username: string({ required_error: 'Se requiere un nombre de usuario' })
    .min(1, 'Se requiere un nombre de usuario')
    .max(32, 'El nombre de usuario debe tener menos de 32 caracteres'),
  email: string({ required_error: 'Se requiere un correo electrónico' })
    .min(1, 'Se requiere un correo electrónico')
    .email('Correo electrónico no válido'),
  password: string({ required_error: 'Se requiere una contraseña' })
    .min(1, 'Se requiere una contraseña')
    .min(8, 'La contraseña debe tener más de 8 caracteres')
    .max(32, 'La contraseña debe tener menos de 32 caracteres'),
  passwordConfirm: string({ required_error: 'Se requiere confirmar la contraseña' })
    .min(1, 'Se requiere confirmar la contraseña')
    .min(8, 'La contraseña debe tener más de 8 caracteres')
    .max(32, 'La contraseña debe tener menos de 32 caracteres'),
  first_name: string({ required_error: 'Se requiere un primer nombre' })
    .min(1, 'Se requiere un primer nombre')
    .max(32, 'El primer nombre debe tener menos de 32 caracteres'),
  middle_name: string({ required_error: 'Se requiere un segundo nombre' })
    .min(1, 'Se requiere un segundo nombre')
    .max(32, 'El segundo nombre debe tener menos de 32 caracteres'),
  first_surname: string({ required_error: 'Se requiere un primer apellido' })
    .min(1, 'Se requiere un primer apellido')
    .max(32, 'El primer apellido debe tener menos de 32 caracteres'),
  second_surname: string({ required_error: 'Se requiere un segundo apellido' })
    .min(1, 'Se requiere un segundo apellido')
    .max(32, 'El segundo apellido debe tener menos de 32 caracteres'),
  avatar: string({ required_error: 'Se requiere una URL de avatar' })
    .url('La URL de avatar no es válida'),
  birthdate: date({ required_error: 'Se requiere una fecha de nacimiento' }),
  id_card: number({ required_error: 'Se requiere un número de cédula' })
    .int('El número de cédula debe ser un número entero')
    .positive('El número de cédula debe ser un número positivo'),
  phone: string({ required_error: 'Se requiere un número de teléfono' })
    .min(1, 'Se requiere un número de teléfono')
    .max(20, 'El número de teléfono debe tener menos de 20 caracteres'),
  address: string({ required_error: 'Se requiere una dirección' })
    .min(1, 'Se requiere una dirección')
    .max(100, 'La dirección debe tener menos de 100 caracteres'),
});
