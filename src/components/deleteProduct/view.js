import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import NotificationSuccess from '../notificationSuccess'
//import useStyles from './style'
import './style.css';


export default function View(props) {

    const [open, setOpen] = React.useState(false);

    const { messageBody, handleAceptarProp, goTo, findResults } = props
    const [openNotification, setOpenNotification] = React.useState(false);
    const successMessage = 'Producto Eliminado Exitosamente!'


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAceptar = () => {
        handleAceptarProp()
        setOpen(false)
        showNotification()
        findResults('.')
        setTimeout(() => {
            goTo('/results')
        }, 2500)
    }

    const showNotification = () => {
        setOpenNotification(true)
        setTimeout(() => { setOpenNotification(false) }, 2000)
    }



    return (
        <div>

            <IconButton type='submit' aria-label="editar" color="primary" onClick={handleClickOpen}>
                <DeleteIcon />
            </IconButton>

            <NotificationSuccess
                openNotification={openNotification}
                message={successMessage}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{messageBody}</DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>

                    <Button onClick={handleAceptar} color="primary" >
                        Aceptar
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Cancelar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}