import React, { useState } from 'react'
import axios from "axios";
// import fetch from 'node-fetch';

export default function SignUp() {
  // render() {
  const url = 'localhost:3001/api_v1/user/';

  const [data, setData] = useState([]);

  const SignUp = async () => {

    let user = document.getElementById('username').value;
    let psw = document.getElementById('password').value;

    // const users = {
    //   username: user,
    //   password: psw,
    // };

    // console.log()

    await axios.post(`${url}add_user?username=${user}&password=${psw}`)
      .then(response => {
        setData(response.data.statusMessage);
        console.log(response.data.statusMessage);
        alert('Usuario agregado exitosamente');
      })
      .catch(function (error) {
        console.log(error);
      });

    // await axios.get(`${url}get_all_users`)
    //   .then(response => {
    //     setData(response.data.statusMessage);
    //     console.log(response.data.statusMessage);
    //     alert(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  return (
    <form>
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
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={SignUp}>
          Registrarse
        </button>
      </div>
    </form>
  )
}
// }