
import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './style'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function View(props) {

    const classes = useStyles();
    const { openNotification, message } = props


    return (
        <div className={classes.root}>

            <Snackbar open={openNotification}  >
                <Alert severity="success">
                    {message}
                </Alert>
            </Snackbar>

        </div>
    )
}


