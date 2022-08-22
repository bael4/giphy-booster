import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../store/actions'
import Category from './Category'

function Categories() {
  const disptach = useDispatch()
  const { categories, error, loading } = useSelector((state) => state.categoryReducer)
  useEffect(() => {
    disptach(getCategories())
  }, [])
  console.log(categories, error, loading)
  return (
    <ul>
      {categories.map((category, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Category key={index} {...category} />
      ))}
    </ul>
  )
}

export default Categories
