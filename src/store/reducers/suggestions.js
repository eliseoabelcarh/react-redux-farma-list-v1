import products from '../../data/products'
import * as types from '../constants'

const initialState = products

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FIND_SUGGESTIONS:
            const regex = new RegExp(`^${payload}`, 'i')
            return state.filter(n => regex.test(n.Nom_Prod))

        default:
            return state
    }
}

export default reducer