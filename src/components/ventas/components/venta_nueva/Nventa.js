
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';   
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
//import calendario from './calendario/';
import Calendario from './calendario';
//import "/"
import React, { useState, useEffect } from "react";
import api from "../../../../api";
function Nproducto() {

  const [ventas, setVentas] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

 
    const [newVentas, setNewVentas] = useState({
    nventas: "",
    cantidad: 0,
    price: 0,
    vventas: 0,
    fecha: "",
    cliente: "",
    cedula: "",
    vendedor: "",
    estado: "",
  });
  const handleChange = (event) => {
    setNewVentas({ ...newVentas, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.ventas.create(newVentas);
    setVentas([...ventas, newVentas]);
  };
  return (
      <div>
        <header>
          <Container >
            <Row className="titulo d-flex justify-content-center mt-1 mb-5">
              <Col xs={6}>
                <div className="text-center">
                  <h1 >Ingreso Factura</h1>
                </div>
              </Col>
            </Row>  
          </Container>
        </header>
        <Container >
          <Row className="d-flex justify-content-center mt-5">
            <Col md={4} xs={6} className="border border-dark rounded d-flex justify-content-center ">{/* bg-info */}
              <Form>
                <Form.Group as={Row} className="mb-2 mt-4 bold" controlId="formNombre">
                  <Form.Label column sm={2}>
                    N.Venta:
                  </Form.Label>
                  <Col md={12}sm={10}>
                    <Form.Control type="text" name="nventas"
                  onChange={handleChange} placeholder="Numero de venta"/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2 " controlId="formStock">
                  <Form.Label column sm={2}>
                    Cantidad:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="cantidad"
                  onChange={handleChange} placeholder="Numero de productos" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Precio:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="price"
                  onChange={handleChange} placeholder="Precio ventas" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    V.Venta:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="vventas"
                  onChange={handleChange} placeholder="Valor total de ventas" />
                  </Col>
                </Form.Group>

                
                <Form.Group as={Row} className="mb-2" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Fecha:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="fecha"
                  onChange={handleChange} placeholder="Valor total de ventas" />
                  </Col>
                </Form.Group>

                
                <Form.Group as={Row} className="mb-2" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Cliente:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="cliente"
                  onChange={handleChange} placeholder="Nombre de cliente" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-2" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Cedula:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="cedula"
                  onChange={handleChange} placeholder="Numero de cedula " />
                  </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-2" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Vendedor:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="vendedor"
                  onChange={handleChange} placeholder="Nombre del vendedor " />
                  </Col>
                </Form.Group>
            
                


                <Form.Group as={Row} className="mb-5" controlId="formPlaintextPassword">
                  <Form.Label column sm="2" >
                  Estado
                  </Form.Label>
                  <Col sm="10">
                    <Form.Select aria-label="Seleccione el estado de la venta "  name="estado"
                  onChange={handleChange}>
                      <option>Seleccione el estado de la venta</option>
                      <option value="En proceso">En proceso</option>
                      <option value="Cancelada">Cancelada</option>
                      <option value="Entregada">Entregada</option>
                    </Form.Select>
                  </Col>
              </Form.Group>

                
                

                <Form.Group as={Row} className="mb-5">
                  <Col md={12} className="d-flex justify-content-around">
                    <Link to="/Aventas">
                      <Button onClick={handleClick} type="submit">Aceptar</Button>
                    </Link>
                    <Link to="/Aventas">
                      <Button variant="danger" type="submit">Cancelar</Button>
                    </Link>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>  
        </Container>
      </div>
    
  );
}


export default Nproducto;