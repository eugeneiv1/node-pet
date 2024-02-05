import { model, Schema } from "mongoose";

import { EUserRole } from "../enums/user-role.enum";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 3,
      max: 99,
    },
    role: {
      type: String,
      default: EUserRole.USER,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("user", UserSchema);
