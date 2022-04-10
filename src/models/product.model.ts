export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
  isBlock: boolean
}

export type IProductDTO = Omit<IProduct,"id">