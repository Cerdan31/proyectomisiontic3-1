import { React, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import api from '../../api';
import { useHistory } from "react-router-dom";

const AgregarUsuario = ({ usuarios, setUsuarios }) => {

    const history = useHistory();

    const [nuevoUsuario, setNuevoUsuario] = useState({
        email: "",
        nombre: "",
        activo: false,
        rol: ""
    });

    const handleChange = (event) => {
        setNuevoUsuario({ ...nuevoUsuario, [event.target.name]: event.target.value });
    };

    const handleClick = async () => {
        const apiResponse = await api.usuarios.create(nuevoUsuario);
        console.log(nuevoUsuario);
        console.log(apiResponse);
        setUsuarios([...usuarios, nuevoUsuario]);
        history.push("/usuarios");
    };

    const roles = [
        { id: 1, nombre: "Administrador" },
        { id: 2, nombre: "Vendedor" }
    ];
    const activos = [
        { id: 1, nombre: "true" },
        { id: 2, nombre: "false" },
        // { id: 3, nombre: "No Autorizado" }
    ];

    return (
        <Container className="mt-5">
            <div className="text-center mb-5">
                <h1>Agregar Usuario</h1>
            </div>
            <Form className="d-flex justify-content-center align-items-center">
                <Container className="col-4">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="nombre"
                                type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="email"
                                type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rol:</Form.Label>
                            <Form.Select
                                onChange={handleChange}
                                name="rol">
                                <option>Seleccione un rol...</option>
                                {roles.map(rol => (
                                    <option value={rol.nombre}>{rol.nombre}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Estado:</Form.Label>
                            <Form.Select
                                onChange={handleChange}
                                name="activo">
                                <option>Seleccione un estado...</option>
                                {activos.map(activo => (
                                    <option value={activo.nombre}>{activo.nombre}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <div className="text-center">
                            <Link to="/usuarios">
                                <Button onClick={handleClick} type="button" variant="primary">Guadar</Button>
                            </Link>
                            &nbsp;
                            <Link to="/usuarios">
                                <Button variant="danger">Cancelar</Button>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </Form>
        </Container>
    );
}

export default AgregarUsuario;