import { IProductDTO, IProduct } from "@models/product.model";
import Boom from '@hapi/boom';
import poolConnection from "../libs/postgres";
import { Pool } from "pg";
import { AppDataSource } from "../libs/typeORM";
import { Products } from "../db/entities/product.entity";
import { Repository } from "typeorm";
export class ProductsService {

  products: IProduct[] = []
  pool: Pool;
  productEntity: Repository<Products>

  constructor(){
    this.pool = poolConnection
    this.pool.on("error", (err) => {
      console.log("Error in connection with pg ", err);
    })
    this.productEntity = AppDataSource.getRepository(Products)
  }

  async create(data: IProductDTO): Promise<Products> {
    const product = await this.productEntity.create(data)
    return product
  }

  async find() {
    console.log("entry");
    const res = await this.productEntity.find()
    console.log("res", res);
    return res
  }

  async findOne(id: number) {
    const product = await this.productEntity.findOneBy({ id }) 

    if(!product){
      throw Boom.notFound("Product no found.")
    }

    if(product.isPublished) {
      throw Boom.conflict('Product is block')
    }

    return product
  }

  async update(id: number, data: IProductDTO) {
    const res = await this.productEntity.update({id}, data)
    if (!res.affected) {
      throw Boom.notFound("Product no found.")
    }
    return res;
  }

  async delete(id: number) {
    const res = await this.productEntity.delete({ id })
    if (!res.affected) {
      throw Boom.notFound("Product no found.")
    }
    return res
  }

}