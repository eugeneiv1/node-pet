import { IActionToken } from "../interfaces/actionToken.interface";
import { IToken } from "../interfaces/token.interface";
import { ActionToken } from "../models/action_token.model";
import { Token } from "../models/token.model";

class TokenRepository {
  public async create(data: IToken) {
    return await Token.create(data);
  }

  public async createActionToken(data: IActionToken) {
    return await ActionToken.create(data);
  }

  public async getAll(): Promise<IToken[]> {
    return await Token.find({});
  }

  public async findManyByParams(params) {
    return await Token.find(params);
  }
}

export const tokenRepository = new TokenRepository();
