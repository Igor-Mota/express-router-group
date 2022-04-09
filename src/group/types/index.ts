export interface IsetProps {
  method: string
  prefix: string
  controller: Function
  middleware?: Function[]
}

export interface IAllRoutsGroup {
  middleware: string
  prefix: string
}

export interface IAllRouts {
  method: string
  prefix: string
  controller: string
}
