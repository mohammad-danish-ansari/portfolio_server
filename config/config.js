import dotenv, { config } from "dotenv"
import OPTIONS from "./option.js"
dotenv.config()
export const CONSTANTS = {
    port: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    key: process.env.JWT_KEY
}


export const SUPER_ADMIN_USER = {
    name: "bike wale",
    email: "superadmin@gmail.com",
    password: "Admin@123",
    role: OPTIONS.usersRoles.SUPER_ADMIN,
  };
