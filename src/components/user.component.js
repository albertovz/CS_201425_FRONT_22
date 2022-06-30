import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { pink } from '@mui/material/colors';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Alert from '@mui/material/Alert';


export default function User() {

    const url = 'http://localhost:3001/api_v1/user/';
    const [data, setData] = useState([]);

    useEffect(() => {
        showUsers();
    }, []);

    const showUsers = async () => {

        var headers = { 'Access-Control-Allow-Origin': '*' }
        const api = await fetch(`${url}get_all_users`,
            {
                method: 'GET',
                mode: 'cors',
                headers: headers
            });
        const use = await api.json();
        console.log(use);
        setData(use)

        data.map(nombres => {
            // console.log(nombres.username)
        })
    }

    return (

        <section>
            {/* <Alert severity="success">Usuario agregado con éxito</Alert> */}
            <h3 className='Table-center'>Usuarios</h3>
            <div className='Btn-margin'>
                <Link className="nav-link" to={'/sign-up'}><Button color="success" variant="outlined" endIcon={<PersonAddIcon />}>
                    Agregar
                </Button>
                </Link>
            </div>

            <div className='table-wrapper-scroll-y my-custom-scrollbar'>
                <table className="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((usr) => {
                            return (
                                <tr key={usr.id}>
                                    <td>{usr.id}</td>
                                    <td>{usr.username}</td>
                                    {/* <td>{usr.password}</td> */}
                                    {/* <td>{usr.password}</td> */}
                                    <td>{usr.phone_number}</td>
                                    <td>
                                        <Button color="primary" variant="outlined" endIcon={<CreateOutlinedIcon />}>
                                            Editar
                                        </Button>
                                        &nbsp;&nbsp;&nbsp;
                                        <Button sx={{ color: pink[500] }} variant="outlined" startIcon={<DeleteIcon />}>
                                            Borrar
                                        </Button>
                                        {/* <Edit className={styles.iconos} onClick={() => typeModal(usr, 'Editar')} />
                                    &nbsp;&nbsp;&nbsp;
                                    <Delete className={styles.iconos} onClick={() => typeModal(usr, 'Eliminar')} /> */}
                                    </td>
                                </tr>
                            );
                        })}
                        {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                    </tbody>
                </table>
            </div>

        </section>

    )


}