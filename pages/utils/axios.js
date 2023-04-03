import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecom-8v3t.onrender.com/',
})

export default instance
