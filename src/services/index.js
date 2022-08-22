import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
})
export function getCategoriesReq() {
  return instance.get('categories?api_key=qgwNJOmmv98ZEevNmCuuSLmNfAezI4HW')
}
