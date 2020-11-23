import React from 'react';
import './style.css';

import TextField from '@material-ui/core/TextField';


export default function View(props) {


    const { getResultsAPI } = props;

    const handleTag = ({ target }) => {
        const { value } = target;
        if (!value) {
            return

        }
        getResultsAPI(value)

    };

    return (

        <div>

            <div className="containerSearchBox">
                <TextField
                    id="outlined-search"
                    label="Buscar nombre de medicamento"
                    type="search"
                    color="secondary"
                    onChange={(event) => handleTag(event)}
                    variant="filled"
                    fullWidth={true}
                />
            </div>


        </div>

    )
}


