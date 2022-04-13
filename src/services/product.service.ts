import { IProductDTO, IProduct } from "@models/product.model";
import Boom from '@hapi/boom';
import poolConnection from "../libs/postgres";
import { Pool } from "pg";
import { AppDataSource } from "../libs/typeORM";
import { Products } from "../db/entities/product.entity";
export class ProductsService {

  products: IProduct[] = []
  pool: Pool;

  constructor(){
    this.generate();
    this.pool = poolConnection
    this.pool.on("error", (err) => {
      console.log("Error in connection with pg ", err);
    })
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: index+1,
        name: "cris",
        price: 123,
        image: "wrl",
        isBlock: true,
      });
    }
  }

  async create(data: IProductDTO) {
    const newProduct: IProduct = {
      id: 12,
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const res = await AppDataSource.manager.find(Products)
    return res
  }

  async findOne(id: number) {
    const product = this.products.find(item => item.id === id);

    if(!product){
      throw Boom.notFound("Product no found.")
    }

    if(product.isBlock) {
      throw Boom.conflict('Product is block')
    }

    return product
  }

  async update(id: number, changes: IProductDTO) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw Boom.notFound("Product no found.")
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id: number) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw Boom.notFound("Product no found.")
    }
    this.products.splice(index, 1);
    return { id };
  }

}