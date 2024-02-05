import { Types } from "mongoose";

import { EACTIONTokenType } from "../enums/toke-type.enum";

export interface IActionToken {
  actionToken: string;
  userId: Types.ObjectId;
  actionType: EACTIONTokenType;
}
