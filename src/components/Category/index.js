import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../store/actions'
import Category from './Category'
import './Category.css'

function Categories() {
  const disptach = useDispatch()
  const [value, setValue] = useState([])

  const { categories, error, loading } = useSelector((state) => state.categoryReducer)
  useEffect(() => {
    disptach(getCategories())
  }, [])
  console.log(categories, error, loading)
  const getNameByClick = (name) => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=qgwNJOmmv98ZEevNmCuuSLmNfAezI4HW&q=${name}&limit=25&offset=0&rating=g&lang=en`,
      )
      .then((r) => setValue(r.data))
    console.log(value)
  }
  return (
    <div className="main">
      <div className="category">
        {categories.map((category, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Category key={index} {...category} getNameByClick={getNameByClick} />
        ))}
      </div>
      <div className="gg">
        {value?.data?.map((g, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <p>{g.title}</p>
            <img src={g.images.fixed_height.url} alt="img" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
