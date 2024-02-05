import jwt from "jsonwebtoken";

import { configs } from "../configs/configs";
import { ITokenPair } from "../interfaces/tokenPair.interface";
import { ITokenPayload } from "../interfaces/tokenPayload.interface";

class TokenService {
  public generateTokenPair(payload: ITokenPayload): ITokenPair {
    const accessToken = jwt.sign(payload, configs.JWT_ACCESS_SECRET, {
      expiresIn: "5m",
    });
    const refreshToken = jwt.sign(payload, configs.JWT_REFRESH_SECRET, {
      expiresIn: "1h",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  public generateActionToken(payload: ITokenPayload): string {
    const actionToken = jwt.sign(payload, configs.JWT_ACTION_SECRET, {
      expiresIn: "3h",
    });
    return actionToken;
  }
}

export const tokenService = new TokenService();
