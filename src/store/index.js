import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { categoryReducer } from './category'
import { trendReducer } from './trend'
import { randomReducer } from './random'

const rootReducer = combineReducers({ categoryReducer, trendReducer, randomReducer })
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)
