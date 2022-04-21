import { BaseModel } from "./base.model"

export class ProductModel extends BaseModel {
  name!: string
  description!: string
  filename!: string
  views!: number
  isPublished!: boolean
}