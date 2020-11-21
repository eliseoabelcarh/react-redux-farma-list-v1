import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
//import useStyles from './style'
import './style.css';


export default function View(props) {

    // const classes = useStyles();
    const { currentItemStock, updateCurrentItemStock } = props
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateStock = () => {
        if (isNaN(text)) return
        updateCurrentItemStock({ Cod_Prod: currentItemStock.Cod_Prod, newQty: text })
        setOpen(false);
    }

    const onChangeInput = (event) => {
        setText(parseInt(event.target.value))
    }

    return (
        <div>

            <IconButton type='submit' aria-label="editar" color="primary" onClick={handleClickOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Stock</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* Contenido */}
                    </DialogContentText>

                    <TextField
                        error={isNaN(text)}
                        id="outlined-number"
                        label="Stock"
                        type="number"
                        defaultValue={currentItemStock.Qty}
                        variant="outlined"
                        onChange={event => onChangeInput(event)}
                        helperText={isNaN(text) ? 'No debe estar vacío!' : ' '}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={updateStock} color="primary">
                        Actualizar
          </Button>
                    <Button onClick={handleClose} color="primary" >
                        Cancelar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}