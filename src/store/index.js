import { createStore, combineReducers, applyMiddleware } from 'redux'
import results from './reducers/results'
import suggestions from './reducers/suggestions'
import currentItem from './reducers/currentItem'
import currentItemStock from './reducers/currentItemStock'
import products from './reducers/products'
import resultsAPI from './reducers/resultsAPI'
import middleware1 from './middlewares/middleware1'

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
    currentItemStock,
    products,
    resultsAPI

})

// aplicamos middleware para fetch data async
const store = createStore(reducer, applyMiddleware(middleware1))


export default store


