import React, { Fragment } from 'react';
import AppBar from '../../components/appBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import './style.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



export default function View(props) {


    const { data } = props;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />
            <div className="container">
                <Card >
                    <div className="card" >
                        <CardContent >
                            <Typography component="h2" variant="h5">
                                {data.title}
                            </Typography>


                        </CardContent>
                    </div>
                </Card>
            </div>
        </Fragment>
    )
}
