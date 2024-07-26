import request from '@/utils/request'

export const getCategory = () => {
  return request<CategoryApiType>({
    url: '/category'
  })
}
