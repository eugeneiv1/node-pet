import joi from "joi";

import { regexConstant } from "../constants/regex.constants";
export class UserValidator {
  private static email = joi.string().regex(regexConstant.EMAIL).trim();
  private static password = joi.string().trim().regex(regexConstant.PASSWORD);
  private static userName = joi.string().trim().min(3).max(50);
  private static age = joi.number().min(10).max(99);

  public static create = joi.object({
    email: this.email.required(),
    password: this.password.required(),
    name: this.userName,
    age: this.age,
  });
  public static login = joi.object({
    email: this.email.required(),
    password: this.password.required(),
  });

  public static forgotPassword = joi.object({
    email: this.email.required(),
  });
}
