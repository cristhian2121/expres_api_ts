import express from "express"
import { boomErrorHandler, errorHandler, logErrors } from "./middlewares/error.handler"
import { routerApi } from "./routes"
import helmet from "helmet"

const app = express()
const port = 3200

app.use(express.json())

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