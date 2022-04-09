import { Express } from "express"

export function appUse(app: Express, [...rest]: Function[]) {
  rest.forEach((conf) => {
    app.use(conf())
  })
}
