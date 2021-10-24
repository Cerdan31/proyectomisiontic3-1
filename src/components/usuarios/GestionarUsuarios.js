import { React, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
// import usuarios from './EjemploListaUsuarios/EjemploListaUsuarios.json';
import api from "../../api";

const GestionarUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.usuarios.list();
            setUsuarios(response);
        };
        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                <div className="text-center pt-5">
                    <h1>Usuarios</h1>
                </div>
                <div>
                    <Link className="p-0 float-end" to="/agregarUsuario">
                        <Button variant="primary">Agregar Usuario</Button>
                    </Link>
                </div>
                <Table className="mt-5" striped bordered hover>
                    <thead className="text-center">
                        <tr>
                            {/* <th>Id</th> */}
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody className="text-center justify-content-center align-items-center">
                        {usuarios.map(usuario => (
                            <tr key={usuario._id}>
                                {/* <td>{usuario._id}</td> */}
                                <td>{usuario.nombre}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.rol}</td>
                                <td>{(usuario.activo)?("Activo"):("Inactivo")}</td>
                                <td>
                                    {/* <Link className="p-0" to="/editarUsuario">
                                        <Button variant="warning">Editar</Button>
                                    </Link> */}
                                    <Link to={`/editarUsuario/${usuario._id}`}>
                                        <Button variant="warning">Editar</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container >
    );
}

export default GestionarUsuarios;