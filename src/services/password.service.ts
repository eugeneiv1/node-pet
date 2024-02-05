import bcrypt from "bcrypt";

import { configs } from "../configs/configs";
class PasswordService {
  public hash(password: string) {
    return bcrypt.hash(password, configs.SECRET_SALT);
  }

  public confirm(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }
}

export const passwordService = new PasswordService();
