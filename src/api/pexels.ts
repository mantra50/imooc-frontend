import request from '@/utils/request'

type paramsType = {
  page: number
  size: number
  categoryId?: string
  searchText?: string
}
export const getPexelsList = (params: paramsType) => {
  return request<PexelsListApiType>({
    url: '/pexels/list',
    params
  })
}
