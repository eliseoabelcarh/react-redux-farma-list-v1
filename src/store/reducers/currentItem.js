//import products from '../../data/products'
import * as types from '../constants'
import products from '../initialState'

const initialState = {}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FIND_CURRENT_ITEM:
            let product = products.find(i => i.Cod_Prod === payload)
            return product ? product : null
        default:
            return state
    }
}

export default reducer