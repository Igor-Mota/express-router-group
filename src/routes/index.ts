import { Express } from "express"
import userRoutes from "./user.routes"

export default function routes(app: Express) {
  app.use(userRoutes)
}
