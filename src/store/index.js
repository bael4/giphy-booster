import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({})
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))
