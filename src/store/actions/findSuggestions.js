import * as types from '../constants'


const findSuggestions = text => {
    return {
        type: types.FIND_SUGGESTIONS,
        payload: text
    }
}
export default findSuggestions