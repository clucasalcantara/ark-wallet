import axios from 'axios'

export default axios.create({
  baseURL: 'https://explorer.ark.io',
  responseType: 'json',
})
