import { Express, Router } from "express"
import productsRouter from "./product.router"
import categoryRouter from "./product.router"

export function routerApi(app: Express) {
  // v1
  const routerV1 = Router()  
  app.use('/api/v1', routerV1)

  routerV1.use('/product', productsRouter)
  routerV1.use('/category', categoryRouter)


  // v2

  const routerV2 = Router()
  app.use('/api/v2', routerV2)
  // ...
}
