import products from '../../data/products'
import * as types from '../constants'
//import initialState from '../initialState'

const initialState = products

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        /*       case types.FIND_RESULTS:
                  console.log('fiondddd', payload)
                  const regex = new RegExp(`^${payload}`, 'i')
                  console.log('staddooo en resultss ', state)
                  return state.filter(n => regex.test(n.Nom_Prod)) */
        case types.FIND_RESULTS:
            const regex = new RegExp(`^${payload}`, 'i')
            const nuevo1 = products.filter(n => regex.test(n.Nom_Prod))
            return [...nuevo1]

        default:
            return state
    }
}

export default reducer