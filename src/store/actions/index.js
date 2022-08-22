import { CATEGORIES, CATEGORIES_ERROR, CATEGORIES_LOADER } from '../category'
import { getCategoriesReq } from '../../services'

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
