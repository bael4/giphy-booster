import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import '../../styles/Categories.css'
// eslint-disable-next-line react/prop-types, no-unused-vars
function Category({ name, subcategories, getNameByClick, ...props }) {
  const [isActive, setIsActive] = useState(false)
  // console.log(name)
  const toogleActive = () => setIsActive(!isActive)

  const handlerCategoryClick = () => {
    toogleActive()
    getNameByClick(name)
  }
  function renderSubcategories() {
    if (isActive && subcategories && subcategories.length) {
      return (
        <ul className="subcategories_list">
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
    <div className="category_item">
      <li className="categories_list">
        <span aria-hidden onClick={handlerCategoryClick}>
          {name}
        </span>
        {renderSubcategories()}
      </li>
    </div>
  )
}

export default Category

Category.propTypes = {
  name: PropTypes.string.isRequired,
  subcategories: PropTypes.array,
}
