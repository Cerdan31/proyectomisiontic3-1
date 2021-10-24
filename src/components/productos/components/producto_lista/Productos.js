import React, { Component } from "react"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'; 
import Barra from './Barra';
// import Tabla from './Tabla';
class ListaProductos extends Component {
    render () {
        return (
            <Container>
                <Row  className="d-flex justify-content-center align-items-center mt-5"> 
                    <Barra/> 
                    {/* <Tabla/> */}
                </Row> 
            </Container>
            
        );
    }
}
export default ListaProductos;