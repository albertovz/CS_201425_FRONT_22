import React, { useState } from 'react'
import axios from "axios";
export default function SignUp() {
  // render() {
  const url = 'localhost:3001/api_v1/user/';

  const [data, setData] = useState([]);

  const SignUp = async () => {
    // Solicitud GET (Request).
    await axios.get(`${url}get_all_users`)
      .then(response => {
        setData(response.data.statusMessage);
        console.log(response.data.statusMessage);
        alert("working");
      })
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
          Regitrarse
        </button>
      </div>
    </form>
  )
}
// }