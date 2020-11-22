import * as types from '../constants'

//import axios from 'axios'


const initialState = []

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.FIND_RESULTS_API:
            return [...payload]

        default:
            return state
    }
}

export default reducer


