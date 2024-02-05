import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import {FilterQuery} from "mongoose";

class UserRepository {

  public async getAll(): Promise<IUser[]> {
    return await User.find({});
  }
  public async createNewUser(dto: Partial<IUser>) {
    return await User.create(dto);
  }

  public async findById(id: string): Promise<IUser> {
    return await User.findOne({ _id: id });
  }

  public async findOneByParams(params: FilterQuery<IUser>): Promise<IUser> {
    return await User.findOne(params);
  }
}

export const userRepository = new UserRepository();
