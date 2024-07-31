import request from '@/utils/request'

export type pexelsParamsType = {
  page?: number
  size?: number
  categoryId?: string
  searchText?: string
}
export const getPexelsList = (params: pexelsParamsType) => {
  return request<PexelsListApiType>({
    url: '/pexels/list',
    params
  })
}

/**
 * 获取搜索提示
 */
export const getHint = (q: string) => {
  return request<SearchHintApiType>({
    url: '/pexels/hint',
    params: {
      q
    }
  })
}
