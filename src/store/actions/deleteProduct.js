import * as types from '../constants'

const deleteProduct = payload => {
    return {
        type: types.DELETE_PRODUCT,
        payload: payload
    }
}
export default deleteProduct

