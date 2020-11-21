import React, { Fragment } from 'react';
import AppBar from '../appBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Listado from '../listado'

export default function View(props) {

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />

            <div>
                <Typography style={{ marginTop: '2rem', textAlign: 'center' }} variant="h5" component="h3" className="page-message">
                    Home
                </Typography>
                <Listado />
            </div>

        </Fragment>
    )
}


