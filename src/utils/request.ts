import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

instance.interceptors.response.use((response: AxiosResponse<RequestType, any>) => {
  const { data, success, message } = response.data
  if (success) {
    return data
  }
  return Promise.reject(new Error(message))
})

const request = async <T = any>(config: AxiosRequestConfig) => {
  return (await instance.request(config)) as T
}
export default request
