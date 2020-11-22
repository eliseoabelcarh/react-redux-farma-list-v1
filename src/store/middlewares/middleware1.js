import * as types from '../constants'
import axios from 'axios'

const middleware1 = store => next => ({ type, payload }) => {
    if (type === types.FIND_RESULTS_API) {
        //info en :  https://sede.aemps.gob.es/docs/CIMA-REST-API_1_19.pdf
        let url = `https://cima.aemps.es/cima/rest/medicamentos?nombre=${payload}`
        axios.get(url)
            .then((response) => {
                const data = response.data
                next({ type: types.FIND_RESULTS_API, payload: data.resultados })
            })
            .catch((err) => {
                console.log('error en middleware1')
                //dispatch(onError(err))
            })
    }

    return next({ type, payload })
}
export default middleware1