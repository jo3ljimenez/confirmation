import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(name: string , answer: string, error: boolean) {
    let message = '';
    let title = '';

    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(true);
    });

    const handleClose = () => {
        setOpen(false);
    };

    if(!error){
        title = 'Tu respuesta ha sido envida.';
        if(answer === 'yes'){
            message = `Gracias por confirmar tu asistencia ${name.trim().split(/\s+/)[0]}, 
            no da gusto que nos acompañes en este día tan especial para nosotros :D`;
        }else{
            message = `Lamentamos que no puedas acompañarnos, esperamos que nos veamos pronto :D`;
        }
    }else{
        title = 'Error';
        message = 'Error al tratar de enviar tu respuesta, por contacta a los novios para informarles.';
    }

    return (
        <>
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                    {title}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} autoFocus>Cerrar</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}
