import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import User from './user.component';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

let user = document.getElementById('username');
let psw = document.getElementById('password');

export default function SignUp() {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    // console.log(data.username)
    SignUp();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // render() {
  const url = 'http://localhost:3001/api_v1/user/';


  const [data, setData] = useState([]);

  const SignUp = async () => {
    user = document.getElementById('username').value;
    psw = document.getElementById('password').value;
    var headers = { 'Access-Control-Allow-Origin': '*' }
    const users = {
      username: user,
      password: psw,
    };
    const api = await fetch(`${url}add_user?username=${users.username}&password=${users.password}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: headers
      });
    const use = await api.json();

    setData(use)
  }

  return (
    // <form>
    <section>
      <h3>Registrarse</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          id='username'
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="password"
          id='password'
        />
      </div>
      <div className="d-grid">
        <Stack spacing={2} sx={{ width: '100%' }}>

          <Button variant="contained" color='success' onClick={handleClick} className='center'>
            Registrarse
          </Button>

          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Usuario agregado con éxito.
            </Alert>
          </Snackbar>
        </Stack>


        {/* <button type="submit" className="btn btn-primary" onClick={SignUp}>
          Registrarse
        </button> */}
      </div>
    </section>

    // </form>
  )
}
// }