import axios from 'axios'
import config from '@/../config.json'
const axiosInstance = axios.create({
  baseURL: config.APP_URL,
  timeout: 1000
})
export default axiosInstance
