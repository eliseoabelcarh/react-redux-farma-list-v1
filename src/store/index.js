import { createStore, combineReducers } from 'redux'
import results from './reducers/results'
import suggestions from './reducers/suggestions'
import currentItem from './reducers/currentItem'
import currentItemStock from './reducers/currentItemStock'
import products from './reducers/products'

const reducer = combineReducers({
    results,
    suggestions,
    currentItem,
    currentItemStock,
    products,

})

const store = createStore(reducer)


export default store