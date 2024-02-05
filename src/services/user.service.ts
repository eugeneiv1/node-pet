import { IUser } from "../interfaces/user.interface";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async findById(id: string) {
    return await userRepository.findById(id);
  }

  public async getAll(): Promise<IUser[]> {
    return await userRepository.getAll();
  }
}

export const userService = new UserService();
