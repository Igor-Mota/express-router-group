"use strict"
import { Router } from "express"
import { replacePrefix } from "../functions"
import { IsetProps } from "../types"

export default function set(
  routes: Router,
  { method, prefix, controller, middleware }: IsetProps
) {
  let regexPrefix = replacePrefix(prefix)

  const path =
    this.allRoutesPrefix !== ""
      ? `/${this.allRoutesPrefix}/${regexPrefix}`
      : `/${regexPrefix}`

  const prepareMiddleware = middleware ? middleware : []
  this.allRoutes.push({ method, prefix, controller: controller.name })
  routes[method](path, ...prepareMiddleware, ...this.middlewares, controller)
}
