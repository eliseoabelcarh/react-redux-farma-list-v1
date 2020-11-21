import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '../appBar';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import EditStock from '../editStock'
import DeleteProduct from '../deleteProduct'
import './style.css';
import useStyles from './style'

export default function View(props) {
    const {
        goTo,
        currentItem,
        currentItemStock,
        updateCurrentItemStock,
    } = props;

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const truncateString = string => { return string.split('').splice(0, 10).join('') }

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="details-page">

                {currentItem ?

                    <Card className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    R
                               </Avatar>
                            }

                            title={currentItem.Nom_Prod}
                            subheader={'Concentración: ' + currentItem.Concent}
                        />

                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Stock: {currentItemStock ? currentItemStock.Qty : 'no hay listado'}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Presentación: {currentItem.Presentac}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Fracciones: {currentItem.Fracciones}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Titular: {currentItem.Nom_Titular}

                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>

                            <IconButton aria-label="editar">
                                <AddShoppingCartIcon />
                            </IconButton>

                            <EditStock
                                currentItemStock={currentItemStock}
                                updateCurrentItemStock={updateCurrentItemStock}
                            />
                            <DeleteProduct
                                currentItemStock={currentItemStock}
                            />


                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Formato de Farmacia: {currentItem.Nom_Form_Farm}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Formato Simplificado: {currentItem.Nom_Form_Farm_Simplif}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Nro Reg. Sanitario: {currentItem.Num_RegSan}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Vto. Reg. Sanitario: {currentItem.Fec_Vcto_Reg_Sanitario ? truncateString(currentItem.Fec_Vcto_Reg_Sanitario) : 'loading...'}
                                </Typography>

                            </CardContent>
                        </Collapse>

                        <Button
                            color="primary"
                            onClick={() => goTo('/results')}
                        >
                            Volver
                    </Button>
                    </Card>


                    :
                    <CircularProgress className="item-loader" />
                }



            </div>
        </Fragment>
    );
}
