import * as types from '../constants'

const createProduct = payload => {
    return {
        type: types.CREATE_PRODUCT,
        payload: payload
    }
}
export default createProduct

