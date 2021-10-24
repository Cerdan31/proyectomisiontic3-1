import React, { Component } from "react"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'; 
import TablaVentas from './TablaVentas';
//import Tabla from './components/ventas/components/administrador_Venta/Tabla';
import BarraVentas from './Barra';
class ListaVentas extends Component {
    render () {
        return (
            <Container>
                <Row  className="d-flex justify-content-center align-items-center mt-5"> 
                    <BarraVentas/>
                    <TablaVentas/> 
                </Row> 
            </Container>
            
        );
    }
}
export default ListaVentas;