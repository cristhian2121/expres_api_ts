import express from "express"
import { routerApi } from "./routes"

const app = express()
const port = 3200

app.use(express.json())

// avaliable routers
routerApi(app)

app.listen(port, () => {
  console.log("Port", port)
})