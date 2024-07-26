declare interface RequestType {
  success: boolean
  code: number
  data: any
  message: string
}

declare interface CategoryApiType {
  categorys: CategoryDataType[]
}
declare interface CategoryDataType {
  id: string
  name: string
  col: number
  urlname: string
}
