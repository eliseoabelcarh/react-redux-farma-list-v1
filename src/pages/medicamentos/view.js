import React, { Fragment } from 'react';
import AppBar from '../../components/appBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Listado from '../../components/listado'

export default function View(props) {

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />

            <div>
                <Typography style={{ marginTop: '2rem', textAlign: 'center' }} variant="h5" component="h3" className="page-message">
                    <div align="center"> Lista Medicamentos</div>
                </Typography>
                <Listado />
            </div>

        </Fragment>
    )
}


