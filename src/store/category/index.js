export const CATEGORIES = 'CATEGORIES'
export const CATEGORIES_LOADER = 'CATEGORIES_LOADER'
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR'
const initialState = {
  categories: [],
  loading: false,
  error: null,
}
// eslint-disable-next-line default-param-last
export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case CATEGORIES_LOADER:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
