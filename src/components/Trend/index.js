import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTrend } from '../../store/actions'
import TrendItem from './TrendItem'
import '../../styles/Trend.css'

function Trend() {
  const disptach = useDispatch()
  const { trend, loader, error } = useSelector((state) => state.trendReducer)
  console.log('trend:', trend)
  useEffect(() => {
    disptach(getTrend())
  }, [])
  return (
    <div className="Trend">
      <div className="container_trend">
        {trend.map((t, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <TrendItem key={index} {...t} />
        ))}
      </div>
    </div>
  )
}

export default Trend
