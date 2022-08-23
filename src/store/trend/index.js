export const TREND = 'TREND'
export const TREND_LOADER = 'TREND_LOADER'
export const TREND_ERROR = 'TREND_ERROR'
const initialState = {
  trend: [],
  loading: false,
  error: null,
}
// eslint-disable-next-line default-param-last
export function trendReducer(state = initialState, action) {
  switch (action.type) {
    case TREND:
      return {
        ...state,
        trend: action.payload,
      }
    case TREND_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case TREND_LOADER:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
