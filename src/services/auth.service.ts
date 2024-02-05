import { EEmailAction } from "../enums/email-action.enum";
import { EACTIONTokenType } from "../enums/toke-type.enum";
import { ApiError } from "../errors/api.error";
import { IUser } from "../interfaces/user.interface";
import { tokenRepository } from "../repositories/token.repository";
import { userRepository } from "../repositories/user.repository";
import { emailService } from "./mail.service";
import { passwordService } from "./password.service";
import { tokenService } from "./token.service";

class AuthService {
  public async signUp(dto: Partial<IUser>) {
    const user = await userRepository.findOneByParams({ email: dto.email });
    if (user) {
      throw new ApiError("User already exists", 400);
    }
    const hashedPassword = await passwordService.hash(dto.password);

    await emailService.sendMail(
      "eugeneiv1@gmail.com",
      EEmailAction.WELCOME,
      dto.name,
    );
    return await userRepository.createNewUser({
      ...dto,
      password: hashedPassword,
    });
  }
  public async signIn(dto: Partial<IUser>) {
    const user = await userRepository.findOneByParams({ email: dto.email });
    if (!user) {
      throw new ApiError("Wrong email or password", 400);
    }
    const isConfirmed = await passwordService.confirm(
      dto.password,
      user.password,
    );

    if (!isConfirmed) {
      throw new ApiError("Wrong email or pasword", 400);
    }
    const tokenPair = tokenService.generateTokenPair({ userId: user._id });
    await tokenRepository.create({ ...tokenPair, userId: user._id });
    return tokenPair;
  }

  public async forgotPassword(dto: Partial<IUser>) {
    const user = await userRepository.findOneByParams({ email: dto.email });
    if (!user) {
      throw new ApiError("User dont exists", 400);
    }

    const actionToken = tokenService.generateActionToken({ userId: user._id });
    await tokenRepository.createActionToken({
      actionToken,
      userId: user._id,
      actionType: EACTIONTokenType.FORGOT,
    });
    console.log("123");
    await emailService.sendMail(
      user.email,
      EEmailAction.FORGOT,
      user.name,
      actionToken,
    );
  }
}

export const authService = new AuthService();
