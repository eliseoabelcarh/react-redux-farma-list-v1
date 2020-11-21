//import products from '../../data/products'

import crearModeloProducto from '../../data/modeloProducto'

import * as types from '../constants'
import initialState from '../initialState'

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.CREATE_PRODUCT:
            const productoCreado = crearModeloProducto(payload)
            return [...state, productoCreado]
        case types.DELETE_PRODUCT:
            const nuevo = state.filter(e => e.Cod_Prod !== payload)
            return [...nuevo]
        /*       case types.FIND_RESULTS:
                  const regex = new RegExp(`^${payload}`, 'i')
                  const nuevo1 = state.filter(n => regex.test(n.Nom_Prod))
                  return [...nuevo1] */

        default:
            return state
    }
}

export default reducer