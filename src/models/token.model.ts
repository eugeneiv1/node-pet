import { model, Schema } from "mongoose";

import { User } from "./user.model";

const TokenSchema = new Schema(
  {
    accessToken: {
      type: String,
      require: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      ref: User,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Token = model("token", TokenSchema);
