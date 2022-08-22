import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import axios from 'axios'
// eslint-disable-next-line react/prop-types, no-unused-vars
function Category({ name, subcategories, ...props }) {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState([])
  const toogleActive = () => setIsActive(!isActive)
  const getNameByClick = () => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=qgwNJOmmv98ZEevNmCuuSLmNfAezI4HW&q=${name}&limit=25&offset=0&rating=g&lang=en`,
      )
      .then((r) => setValue(r.data))
    console.log(value)
  }
  const handlerCategoryClick = () => {
    toogleActive()
    getNameByClick()
  }
  function renderSubcategories() {
    if (isActive && subcategories && subcategories.length) {
      return (
        <ul>
          {subcategories.map((subcategory, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Category key={index} {...subcategory} />
          ))}
        </ul>
      )
    }
    return null
  }

  return (
    <li>
      <span aria-hidden onClick={handlerCategoryClick}>
        {name}
      </span>
      {renderSubcategories()}
      <div>
        {value?.data?.map((g, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <p>{g.title}</p>
            <img src={g.images.fixed_height.url} alt="img" />
          </div>
        ))}
      </div>
    </li>
  )
}

export default Category

Category.propTypes = {
  name: PropTypes.string.isRequired,
  subcategories: PropTypes.array,
}
