/* eslint-disable react/prop-types */
import React from 'react'

// eslint-disable-next-line react/prop-types
function TrendItem({ title, images }) {
  // eslint-disable-next-line react/prop-types
  return (
    <div>
      {/* <p>{title}</p> */}
      <img src={images.fixed_height.url} alt="img" />
    </div>
  )
}

export default TrendItem
