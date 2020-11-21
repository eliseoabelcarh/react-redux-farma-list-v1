import * as types from '../constants'

const updateCurrentItemStock = ({ Cod_Prod, newQty }) => {
    return {
        type: types.UPDATE_CURRENT_ITEM_STOCK,
        payload: { Cod_Prod, newQty }
    }
}
export default updateCurrentItemStock