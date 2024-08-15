import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/zod";
import { db } from "./lib/db";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const { data, success } = LoginSchema.safeParse(credentials);

        if (!success) {
          throw new Error("Credenciales Invalidas");
        }

        const user = await db.user.findUnique({
          where: {
            email: data.email,
          },
        });

        if (!user || !user.password) {
          throw new Error("Usuario no encontrado");
        }

        const isValid = await bcrypt.compare(data.password, user.password);

        if (!isValid) {
          throw new Error("Contraseña Incorrecta");
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
