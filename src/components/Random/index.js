import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandom } from '../../store/actions'

function Random() {
  const dispatch = useDispatch()
  const { random, error, loading } = useSelector((state) => state.randomReducer)
  console.log('random:', random)
  useEffect(() => {
    dispatch(getRandom())
  }, [])
  return (
    <div>
      <div>
        <img src={random?.images?.downsized_medium.url} alt="img" />
      </div>
    </div>
  )
}

export default Random
