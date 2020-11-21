import * as types from '../constants'

const findCurrentItem = Cod_Prod => {
    return {
        type: types.FIND_CURRENT_ITEM,
        payload: Cod_Prod
    }
}
export default findCurrentItem