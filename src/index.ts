import express from "express"
import { boomErrorHandler, errorHandler, logErrors } from "./middlewares/error.handler"
import { routerApi } from "./routes"
import helmet from "helmet"
import cors, { CorsOptions } from "cors"

const app = express()
const port = 3200

app.use(express.json())

// config cors
const whiteList = ["localhost:80"]
const options: CorsOptions = {
  origin: (origin, callback) => {
    const isAllowed = whiteList.includes(origin as string)
    isAllowed ? callback(null, true): callback(new Error())
  }
}
app.use(cors(options))

// avaliable routers
routerApi(app)

// middleware the order is important
app.use(helmet());
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)



app.listen(port, () => {
  console.log("Port", port)
})