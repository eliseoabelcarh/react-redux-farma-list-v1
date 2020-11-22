import React, { Fragment } from 'react';
import AppBar from '../../components/appBar'
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import useStyles from './style'


export default function View(props) {

    const classes = useStyles();
    const { results, goTo } = props
    const isEmpty = results.length === 0

    return (
        <Fragment>
            <CssBaseline />
            <AppBar />


            <div>

                {isEmpty ?

                    <Typography style={{ marginTop: '2rem', textAlign: 'center' }} variant="h5" component="h3" className="page-message">
                        No hay Resultados, utiliza la caja de búsqueda
                     </Typography>

                    :

                    < Container className={classes.cardGrid} maxWidth="lg" >
                        < Grid container spacing={4} >
                            {
                                results.map((item) => (


                                    <Grid item key={item.Cod_Prod} xs={12} sm={6} md={4}>
                                        <Card
                                            className={classes.card}
                                            onClick={() => goTo(`/details/${item.Cod_Prod}`)}
                                        >
                                            <CardActionArea>

                                                <CardContent className={classes.cardContent}>

                                                    <Grid container spacing={2}>

                                                        <Grid item xs={12} sm container>
                                                            <Grid item xs container direction="column" spacing={2}>
                                                                <Grid item xs>

                                                                    <Typography gutterBottom variant="h5">
                                                                        {item.Nom_Prod}
                                                                    </Typography>




                                                                    <Typography variant="body1" gutterBottom>
                                                                        {item.Presentac} x {item.Fracciones}
                                                                    </Typography>



                                                                    <Typography variant="body1" gutterBottom>
                                                                        {item.Nom_Form_Farm} - {item.Nom_Form_Farm_Simplif}
                                                                    </Typography>

                                                                    <Typography variant="caption" gutterBottom>
                                                                        Laboratorio: {item.Nom_Titular}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>

                                                                    <LaunchIcon color="primary" />

                                                                </Grid>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography gutterBottom variant="h5">
                                                                    {item.Concent}
                                                                </Typography>
                                                                <Typography variant="h6">$19.00</Typography>

                                                            </Grid>
                                                        </Grid>
                                                    </Grid>


                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))
                            }
                        </Grid >
                    </Container >


                }

            </div>

        </Fragment>
    )
}


