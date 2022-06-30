import React, { useState } from 'react'
export default function Login() {

  const url = 'http://localhost:3001/api_v1/user/';
  const [data, setData] = useState([]);


  const SignIn = async () => {
    var headers = { 'Access-Control-Allow-Origin': '*' }
    var user = document.getElementById('username').value;
    var psw = document.getElementById('password').value;
    var flag = false;

    const api = await fetch(`${url}get_all_users`,
      {
        method: 'GET',
        mode: 'cors',
        headers: headers
      });
    const use = await api.json();
    data.map(nombres => {
      // console.log(nombres.username)
      if (nombres.username == user)
        flag = true;
    })


    setData(use)

    // flag = data.includes(user)
    // console.log(data)

    if (flag != 0)
      alert('Usuario encontrado')
    else
      alert('No existe usuario')
  }

  return (
    <section>
      <h3>Iniciar Sesión</h3>
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
          placeholder="Password"
          id='password'
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={SignIn}>
          Iniciar Sesión
        </button>
      </div>
    </section>
  )

}