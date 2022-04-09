import express from "express"
import routes from "./routes"
import { appUse } from "./config"

const app = express()
routes(app)
appUse(app, [])

export default app
