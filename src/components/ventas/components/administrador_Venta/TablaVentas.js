import Table from 'react-bootstrap/Table'

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import api from "../../../../api";
import { useEffect } from "react";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

const TablaVentas = ()=>{


    const [ventas, setVentas] = useState([]);
    //const [ventasGestion, setProductosGestion] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.ventas.list();
      setVentas(response);
    };
    

    fetchData();
  }, []);


  const [title, setTitle] = useState('')
  const  getVentasId= async (event) =>{
    const response = await api.ventas. getVentasId(title);
    setVentas([response]);
  };
  const getVenta2= async() =>{
    const VentasFilter = ventas.filter((ventas) => ventas.nventas===title).map(ventas => ventas._id);
    const response = await api.ventas. getVentasId(VentasFilter);
    setVentas([response]);
    console.log(VentasFilter);
    
  };

  const deleteVentas =(event) =>{
    const id = event.target.id;
    api.ventas.delete(id);
    const newVentas = ventas.filter((ventas) => ventas._id !== id);
    setVentas(...[newVentas]);
  };
    return(
      <Col xs={12}>

<ButtonToolbar
        className="justify-content-between mb-4"
        aria-label="Toolbar with Button groups"
        >
          <Link to="/Nventa">
              <Button variant="primary">Nuevo producto</Button>
          </Link>
          <InputGroup>
          
          <Form.Control
             onChange={event => setTitle(event.target.value)} 
              type="text"
              placeholder="ID o Numero de factura"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
              className="me-3"
          />
          <label className="me-3 p-1">Buscar:</label>
          <Button className="me-3 p-2" onClick={getVentasId} variant="primary">ID</Button>
          <Button onClick={getVenta2} variant="primary">Nombre</Button>
          </InputGroup>
          
      </ButtonToolbar>

        <Table striped bordered hover variant="secondary">
            <thead >
            <tr>
                <th className="letra"scope="col">Codigo Venta</th>
                
                <th className="letra"scope="col">Cantidad</th>
                <th className="letra"scope="col">Precio Producto</th>
                <th className="letra"scope="col">Valor Venta</th>
                <th className="letra"scope="col">Fecha</th>
                <th className="letra"scope="col">Cliente</th>
                <th className="letra"scope="col">Cedula</th>
                <th className="letra"scope="col">Vendedor</th>
                <th className="letra"scope="col">Estado</th>
                {/* <th scope="col">Imagen</th> */}
                <th className="letra"scope="col">Editar</th>
                <th className="letra"scope="col">Eliminar</th>
            </tr>
            </thead> 
            <tbody>
            
            {ventas.map(item => (
                
            <tr key={item.url}>
                <td className="centrar">{item.nventas}</td>
                <td className="centrar">{item.cantidad}</td>
                <td className="centrar">${item.price}</td>
                <td className="centrar">${item.vventas}</td>
                <td className="centrar">{item.fecha}</td>
                <td className="centrar">{item.cliente}</td>
                <td className="centrar">{item.cedula}</td>
                <td className="centrar">{item.vendedor}</td>
                <td className="centrar">{item.estado}</td>
                <td className="centrar"><a className= "link"href={`/Nventa/Edit/${item._id}`} >Editar</a></td>
                <td className="centrar"><a className= "link"onClick={deleteVentas} id={item._id}>Eliminar</a></td> 
            </tr>

            ))}

            </tbody>

    </Table>

</Col>
    
    )
};


export default  TablaVentas;