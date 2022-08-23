export const RANDOM = 'RANDOM'
export const RANDOM_LOADING = 'RANDOM_LOADING'
export const RANDOM_ERROR = 'RANDOM_ERROR'

const initialState = {
  random: [],
  loading: false,
  error: null,
}

// eslint-disable-next-line default-param-last
export const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case RANDOM:
      return {
        ...state,
        random: action.payload,
      }
    case RANDOM_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    case RANDOM_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
