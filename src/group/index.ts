import express from "express"
import { IAllRouts, IsetProps } from "./types"
import { setRoute } from "./methods"

import { replacePrefix } from "./functions"

const routes = express.Router()

export class RouterGroup {
  private middlewares: Function[]
  private allRoutes: IAllRouts[]
  private allMiddlewaresShow: string[]
  private allRoutesPrefix: string
  constructor() {
    ;(this.middlewares = []),
      (this.allRoutes = []),
      (this.allRoutesPrefix = ""),
      (this.allMiddlewaresShow = [])
  }
  prefix(prefix: string) {
    this.allRoutesPrefix = replacePrefix(prefix)
  }
  set(params: IsetProps) {
    setRoute.bind(this)(routes, params)
  }
  middleware(mid: Function) {
    this.allMiddlewaresShow.push(mid.name)
    this.middlewares.push(mid)
  }
  get() {
    return routes
  }
  show() {
    const prefix = this.allRoutesPrefix
    return [
      {
        prefix: prefix,
        middlewares: [...this.allMiddlewaresShow],
      },
      ...this.allRoutes,
    ]
  }
}

export default new RouterGroup()
