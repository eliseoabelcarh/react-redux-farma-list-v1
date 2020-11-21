import * as types from '../constants'

const findCurrentItemStock = Cod_Prod => {
    return {
        type: types.FIND_CURRENT_ITEM_STOCK,
        payload: Cod_Prod
    }
}
export default findCurrentItemStock