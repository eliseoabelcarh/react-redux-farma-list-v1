import * as types from '../constants'

const findResultsAPI = text => {
    return {
        type: types.FIND_RESULTS_API,
        payload: text
    }
}
export default findResultsAPI




