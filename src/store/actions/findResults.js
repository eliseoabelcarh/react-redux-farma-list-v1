import * as types from '../constants'

const findResults = text => {
    return {
        type: types.FIND_RESULTS,
        payload: text
    }
}
export default findResults