import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
// eslint-disable-next-line react/prop-types, no-unused-vars
function Category({ name, subcategories, getNameByClick, ...props }) {
  const [isActive, setIsActive] = useState(false)
  // console.log(name)
  const toogleActive = () => setIsActive(!isActive)

  const handlerCategoryClick = (name) => {
    toogleActive()
    getNameByClick(name)
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
      <span aria-hidden onClick={(name) => handlerCategoryClick(name)}>
        {name}
      </span>
      {renderSubcategories()}
    </li>
  )
}

export default Category

Category.propTypes = {
  name: PropTypes.string.isRequired,
  subcategories: PropTypes.array,
}
