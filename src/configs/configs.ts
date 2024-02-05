import { config } from "dotenv";

config();
export const configs = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  FRONT_URL: process.env.FRONT_URL,
  SECRET_SALT: +process.env.SECRET_SALT,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_ACTION_SECRET: process.env.JWT_ACTION_SECRET,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
};
