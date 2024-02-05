import { ITokenPair } from "./tokenPair.interface";

export interface IToken extends ITokenPair {
  userId: string;
}
