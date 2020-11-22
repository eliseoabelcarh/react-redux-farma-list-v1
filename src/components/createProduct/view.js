import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NotificationSuccess from '../notificationSuccess'
import useStyles from './style'
import './style.css';


export default function View(props) {

    const classes = useStyles();
    const { goTo, createProduct, findResults } = props
    const [open, setOpen] = React.useState(false);

    const successMessage = 'Producto Creado Exitosamente!'
    const [openNotification, setOpenNotification] = React.useState(false);

    const [nomProd, setNomProd] = React.useState(false);
    const [concent, setConcent] = React.useState(false);
    const [nomFormFarm, setNomFormFarm] = React.useState(false);
    const [nomFormFarmSimplif, setNomFormFarmSimplif] = React.useState(false);
    const [presentac, setPresentac] = React.useState(false);
    const [fracciones, setFracciones] = React.useState(false);
    const [fecVctoRegSanitario, setFecVctoRegSanitario] = React.useState(false);
    const [numRegSan, setNumRegSan] = React.useState(false);
    const [nomTitular, setNomTitular] = React.useState(false);
    const [situacion, setSituacion] = React.useState(false);



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const esValido = () => {
        if (nomProd === "" || nomProd === false) {
            setNomProd("")
            return false
        }
        if (concent === "" || concent === false) {
            setConcent("")
            return false
        }
        if (nomFormFarm === "" || nomFormFarm === false) {
            setNomFormFarm("")
            return false
        }
        if (nomFormFarmSimplif === "" || nomFormFarmSimplif === false) {
            setNomFormFarmSimplif("")
            return false
        }
        if (presentac === "" || presentac === false) {
            setPresentac("")
            return false
        }
        if (isNaN(fracciones) || fracciones === false) {
            setFracciones(0)
            return false
        }
        if (fecVctoRegSanitario === "" || fecVctoRegSanitario === false) {
            setFecVctoRegSanitario("")
            return false
        }
        if (numRegSan === "" || numRegSan === false) {
            setNumRegSan("")
            return false
        }
        if (nomTitular === "" || nomTitular === false) {
            setNomTitular("")
            return false
        }
        if (situacion === "" || situacion === false) {
            setSituacion("")
            return false
        }
        return true
    }

    const createProd = () => {
        if (esValido()) {
            createProduct({
                nomProd,
                concent,
                nomFormFarm,
                nomFormFarmSimplif,
                presentac,
                fracciones,
                fecVctoRegSanitario,
                numRegSan,
                nomTitular,
                situacion
            })
            setOpen(false);
            showNotification()
            findResults('.')
            setTimeout(() => {
                goTo('/medicamentos')
            }, 2500)

        } else {
            return
        }
    }

    const showNotification = () => {
        setOpenNotification(true)
        setTimeout(() => { setOpenNotification(false) }, 2000)
    }

    return (
        <div>

            <IconButton type='submit' aria-label="crear-producto" color="inherit" onClick={handleClickOpen}>
                <PostAddIcon />
            </IconButton>

            <NotificationSuccess
                openNotification={openNotification}
                message={successMessage}
            />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Crear Producto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* Contenido */}
                    </DialogContentText>
                    <div className={classes.root} >
                        <TextField
                            error={nomProd === ""}
                            id="nomProd"
                            label="Nombre Producto"
                            defaultValue=""
                            autoFocus
                            variant="outlined"
                            onChange={event => setNomProd(event.target.value)}
                            helperText={nomProd === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={concent === ""}
                            id="concent"
                            label="Concentración"
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setConcent(event.target.value)}
                            helperText={concent === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={nomFormFarm === ""}
                            id="nomFormFarm"
                            label="NomFormFarm"
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setNomFormFarm(event.target.value)}
                            helperText={nomFormFarm === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={nomFormFarmSimplif === ""}
                            id="nomFormFarmSimplif"
                            label="NomFormFarmSimplif"
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setNomFormFarmSimplif(event.target.value)}
                            helperText={nomFormFarmSimplif === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={presentac === ""}
                            id="presentac"
                            label="Presentación"
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setPresentac(event.target.value)}
                            helperText={presentac === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={isNaN(fracciones) || fracciones === 0}
                            id="fracciones"
                            label="Fracciones"
                            type="number"
                            defaultValue={0}
                            variant="outlined"
                            onChange={event => setFracciones(parseInt(event.target.value))}
                            helperText={isNaN(fracciones) || fracciones === 0 ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={fecVctoRegSanitario === ""}
                            id="fecVctoRegSanitario"
                            label="Fecha Venc. Reg. San."
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setFecVctoRegSanitario(event.target.value)}
                            helperText={fecVctoRegSanitario === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={numRegSan === ""}
                            id="numRegSan"
                            label="Nro Registro Sanit."
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setNumRegSan(event.target.value)}
                            helperText={numRegSan === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={nomTitular === ""}
                            id="nomTitular"
                            label="Laboratorio"
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setNomTitular(event.target.value)}
                            helperText={nomTitular === "" ? 'No debe estar vacío!' : ' '}
                        />
                        <TextField
                            error={situacion === ""}
                            id="situacion"
                            label="Situación"
                            defaultValue=""
                            variant="outlined"
                            onChange={event => setSituacion(event.target.value)}
                            helperText={situacion === "" ? 'No debe estar vacío!' : ' '}
                        />

                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={createProd} color="primary">
                        Crear
          </Button>

                    <Button onClick={handleClose} color="primary" >
                        Cancelar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}