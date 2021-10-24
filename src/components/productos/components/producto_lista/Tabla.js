import Table from 'react-bootstrap/Table'
// import productos from '../../producto/ListaProductos.json';
import api from "../../../../api";
import { useEffect } from "react";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Tabla = ()=>{
    const [productos, setProductos] = useState([]);
    const [productosGestion, setProductosGestion] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
      setProductosGestion(response);
    };
    fetchData();
  }, []);
  
  const [title, setTitle] = useState('')
  const getProduct= async (event) =>{
    const response = await api.products.getProduct(title);
    setProductosGestion([response]);
  };
  const getProduct2= async() =>{
    const ProductosFilter = productos.filter((product) => product.nombre===title).map(product => product._id);
    const response = await api.products.getProduct(ProductosFilter);
    setProductosGestion([response]);
    console.log(ProductosFilter);
    
  };
  const deleteProduct =(event) =>{
    const id = event.target.id;
    api.products.delete(id);
    const newProducts = productosGestion.filter((product) => product._id !== id);
    setProductosGestion(...[newProducts]);
  };
    return(
      <Col xs={12}>
      <ButtonToolbar
        className="justify-content-between mb-4"
        aria-label="Toolbar with Button groups"
        >
          <Link to="/Nproducto">
              <Button variant="primary">Nuevo producto</Button>
          </Link>
          <InputGroup>
          
          <Form.Control
              onChange={event => setTitle(event.target.value)} 
              type="text"
              placeholder="ID o Nombre"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
              className="me-3"
          />
          <label className="me-3 p-1">Buscar:</label>
          <Button className="me-3 p-2" onClick={getProduct} variant="primary">ID</Button>
          <Button onClick={getProduct2} variant="primary">Nombre</Button>
          </InputGroup>
          
      </ButtonToolbar>
      <Table striped bordered hover variant="secondary">
            <thead >
            <tr>
                <th className="letra"scope="col">Imagen</th>
                <th className="letra"scope="col">Nombre</th>
                <th className="letra"scope="col">Stock</th>
                <th className="letra"scope="col">Precio</th>
                {/* <th scope="col">Imagen</th> */}
                <th className="letra"scope="col">Editar</th>
                <th className="letra"scope="col">Eliminar</th>
            </tr>
            </thead> 
            <tbody>
            
            {productosGestion.map(item => (
                
            <tr key={item.url}>
                <td><img className="imagen"src={item.url} alt=""/></td>
                <td className="centrar">{item.nombre}</td>
                <td className="centrar">{item.stock}</td>
                <td className="centrar">${item.precio}</td>
                <td className="centrar"><a className= "link"href={`/Nproducto/Edit/${item._id}`}>Editar</a></td>
                <td className="centrar"><a className= "link"onClick={deleteProduct} id={item._id}>Eliminar</a></td> 
            </tr>

            ))}

            </tbody>

    </Table>
  </Col>
    )
};

export default Tabla;