import stock from '../../data/stock'
import * as types from '../constants'

const initialState = {}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FIND_CURRENT_ITEM_STOCK:
            let data = stock.find(i => i.Cod_Prod === payload)
            return data ? data : null

        case types.UPDATE_CURRENT_ITEM_STOCK:
            let data1 = stock.find(i => i.Cod_Prod === payload.Cod_Prod)
            data1.Qty = payload.newQty
            return { ...data1 }

        default:
            return state
    }
}

export default reducer