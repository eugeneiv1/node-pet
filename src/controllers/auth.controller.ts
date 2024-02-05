import { NextFunction, Request, Response } from "express";

import { authService } from "../services/auth.service";

class AuthController {
  public async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = req.body;
      const createdUser = await authService.signUp(newUser);
      res.status(200).json({ data: createdUser });
    } catch (e) {
      next(e);
    }
  }
  public async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPair = await authService.signIn(req.body);
      res.status(200).json({ data: tokenPair });
    } catch (e) {
      next(e);
    }
  }

  public async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      await authService.forgotPassword(dto);
      res.status(200).json({
        message: "Soon you will receive restoration link!!!",
      });
    } catch (e) {
      next(e);
    }
  }
}

export const authController = new AuthController();
