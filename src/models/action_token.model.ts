import { model, Schema, Types } from "mongoose";

import { User } from "./user.model";

const ActionTokenSchema = new Schema({
  actionToken: {
    type: String,
    required: true,
  },
  actionType: {
    type: String,
    required: true,
  },
  userId: {
    type: Types.ObjectId,
    required: true,
    ref: User,
  },
});

export const ActionToken = model("actionToken", ActionTokenSchema);
