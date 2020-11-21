import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import initialState from '../../store/initialState'

import Paper from '@material-ui/core/Paper';



// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(2),
        margin: theme.spacing(6),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Orders(props) {
    const classes = useStyles();

    const { products } = props

    const getProducts = () => {
        return products.map((prod) => {
            return createData(prod.Cod_Prod, prod.Num_RegSan, prod.Nom_Prod, prod.Concent, prod.Nom_Form_Farm, prod.Presentac)
        })
    }



    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Title>Recent Orders</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>

                            <TableCell>Num_RegSan</TableCell>
                            <TableCell>Nom_Prod</TableCell>
                            <TableCell>Concent</TableCell>
                            <TableCell>Nom_Form_Farm</TableCell>
                            <TableCell align="right">Presentac</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {getProducts().map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.shipTo}</TableCell>
                                <TableCell>{row.paymentMethod}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/*    <div className={classes.seeMore}>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        See Details
        </Link>
                </div> */}
            </Paper>
        </React.Fragment>
    );
}