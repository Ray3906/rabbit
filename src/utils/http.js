import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'
// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // baseURL:'http://localhost:3000'
  timeout: 5000
})

// axios请求拦截器

http.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    const token = useStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => promise.reject(e)
)

// http.interceptors.request.use(config => {
//   return config
// }, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(
  (res) => res.data,

  //提示框
  (e) => {
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    })
    //401错误
    if (e.response.status === 401) {
      const useStore = useUserStore()
      useStore.clearUserInfo()
      router.push('/login')
    }

    return Promise.reject(e)
  }
)

export default http
