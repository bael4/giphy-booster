import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
})
export function getCategoriesReq() {
  return instance.get('categories?api_key=qgwNJOmmv98ZEevNmCuuSLmNfAezI4HW')
}
export function getTrendReq() {
  return instance.get('trending?api_key=qgwNJOmmv98ZEevNmCuuSLmNfAezI4HW&limit=25&rating=g')
}

export function getRandomReq() {
  return instance.get(
    'https://api.giphy.com/v1/gifs/random?api_key=qgwNJOmmv98ZEevNmCuuSLmNfAezI4HW&tag=&rating=g',
  )
}
