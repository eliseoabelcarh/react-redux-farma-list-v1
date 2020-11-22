import React, { Fragment } from 'react';
import AppBar from '../../components/appBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchDiseases from '../../components/searchDiseases'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import useStyles from './style'

import './style.css';



export default function View(props) {

    const classes = useStyles();
    const { results } = props
    const isEmpty = results.length === 0

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />

            <div align="center" className="searchBox">

                <h3>Consultando API:</h3>
                <div>https://cima.aemps.es/cima/rest </div>
                <p>Productos de la Agencia Española de Medicamentos y Productos Sanitarios</p>
                <p>IMPORTANTE: Los Productos son sólo de referencia, no se cuenta con stock</p>
                <SearchDiseases />

                <div>
                    {
                        isEmpty ? <div>Sin Resultados</div> :

                            <div className="contenedorLista">

                                <List className={classes.root}>
                                    {results.map((item, index) => (

                                        <ListItem alignItems="flex-start" key={index}>
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.nombre}
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            {item.vtm ? item.vtm.nombre : ''}
                                                        </Typography>

                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>

                                    ))}
                                </List>
                            </div>
                    }
                </div>

            </div>

        </Fragment>
    )
}


