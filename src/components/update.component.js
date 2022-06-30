import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';



// export default function Update(props) {


const Update = (props) => {
    const [open, setOpen] = React.useState(false);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    const handleClick = () => {
        setOpen(true);
        console.log(props.date)
    
    
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };
    return (
        <section>
            <h3>Actualizar {props.date}</h3>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="New username"
                    id='username'
                />
            </div>
            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="New password"
                    id='password'
                />
            </div>
            <div className="d-grid">
                <Stack spacing={2} sx={{ width: '100%' }}>

                    <Button variant="contained" color='success' onClick={handleClick} className='center'>
                        Actualizar
                    </Button>

                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Usuario actualizado con éxito.
                        </Alert>
                    </Snackbar>
                </Stack>


                {/* <button type="submit" className="btn btn-primary" onClick={SignUp}>
        Registrarse
      </button> */}
            </div>
        </section>
    )
}



// return (

//     // <form>


//     // </form>
// )
export default Update;
// }