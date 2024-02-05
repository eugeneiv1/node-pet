import { Document } from "mongoose";

import { EUserRole } from "../enums/user-role.enum";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  age: number;
  role: EUserRole;
}
