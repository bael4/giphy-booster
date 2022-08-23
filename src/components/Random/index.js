import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRandom } from '../../store/actions'
import '../../styles/Random.css'

function Random() {
  const dispatch = useDispatch()
  const { random, error, loading } = useSelector((state) => state.randomReducer)
  console.log('random:', random)
  useEffect(() => {
    dispatch(getRandom())
  }, [])
  return (
    <div className="Random">
      <div className="container_random">
        <img src={random?.images?.downsized_medium.url} alt="img" />
      </div>
    </div>
  )
}

export default Random
