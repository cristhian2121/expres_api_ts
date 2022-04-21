import Boom from '@hapi/boom';
import { IUser, IUserDTO } from "@models/user.model";
import { Pool } from "pg";
import { Repository } from "typeorm";
import { User } from "../db/entities/user.entity";
import poolConnection from "../libs/postgres";
import { AppDataSource } from "../libs/typeORM";

export class UserService {
  users: IUser[] = []
  pool: Pool;
  userEntity: Repository<User>;

  constructor() {
    this.pool = poolConnection
    this.pool.on("error", (err) => {
      console.log("Error in connection with pg ", err);
    })
    this.userEntity = AppDataSource.getRepository(User)    
  }

  async create(data: IUserDTO): Promise<User> {
    const newRegister = await this.userEntity.create(data)
    return newRegister
  }

  async find() {
    const res = await this.userEntity.find()
    return res
  }

  async findOne(id: number) {
    const res = await this.userEntity.findOneBy({ id }) 

    if(!res){
      throw Boom.notFound("User no found.")
    }

    return res
  }

  async update(id: number, data: IUserDTO) {
    await this.findOne(id) // validate inf exists
    const res = await this.userEntity.update({id}, data)
    return res;
  }

  async delete(id: number) {
    await this.findOne(id)
    const res = await this.userEntity.delete({ id })
    if (!res.affected) {
      throw Boom.notFound("Product no found.")
    }
    return res
  }

}