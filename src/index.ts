import express from "express"
import { boomErrorHandler, errorHandler, logErrors } from "./middlewares/error.handler"
import { routerApi } from "./routes"

const app = express()
const port = 3200

app.use(express.json())
// middleware the order is important
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

// avaliable routers
routerApi(app)

app.listen(port, () => {
  console.log("Port", port)
})