import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Iniciar Sesión</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
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
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>
    )
  }
}