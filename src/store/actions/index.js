import { CATEGORIES, CATEGORIES_ERROR, CATEGORIES_LOADER } from '../category'
import { getCategoriesReq, getRandomReq, getTrendReq } from '../../services'
import { TREND, TREND_ERROR, TREND_LOADER } from '../trend'
import { RANDOM, RANDOM_ERROR, RANDOM_LOADING } from '../random'

export const loadingCategories = (bool) => ({
  type: CATEGORIES_LOADER,
  payload: bool,
})
export const errorCategories = (error) => ({ type: CATEGORIES_ERROR, payload: error })

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(loadingCategories(true))
    const response = await getCategoriesReq()
    dispatch(loadingCategories(false))
    dispatch({ type: CATEGORIES, payload: response.data.data })
  } catch (e) {
    dispatch(loadingCategories(false))
    dispatch(errorCategories(e))
  }
}
export const loadingTrend = (bool) => ({
  type: TREND_LOADER,
  payload: bool,
})
export const errorTrend = (error) => ({ type: TREND_ERROR, payload: error })

export const getTrend = () => async (dispatch) => {
  try {
    dispatch(loadingTrend(true))
    const response = await getTrendReq()
    dispatch(loadingTrend(false))
    dispatch({ type: TREND, payload: response.data.data })
  } catch (e) {
    dispatch(loadingTrend(false))
    dispatch(errorTrend(e))
  }
}
export const loadingRandom = (bool) => ({
  type: RANDOM_LOADING,
  payload: bool,
})
export const errorRandom = (error) => ({ type: RANDOM_ERROR, payload: error })

export const getRandom = () => async (dispatch) => {
  try {
    dispatch(loadingRandom(true))
    const response = await getRandomReq()
    dispatch(loadingRandom(false))
    dispatch({ type: RANDOM, payload: response.data.data })
  } catch (e) {
    dispatch(loadingRandom(false))
    dispatch(errorRandom(e))
  }
}
