import { useParams, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';   
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
//import "./Nproducto.css"
import React, { useState, useEffect } from "react";
import api from "../../../../api";
import ProductForm from './ProductForm';
function Editarproducto() {
  const history = useHistory();
  const [ventas, setVentas] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const {ventasId}= useParams();

  const [newVentas, setNewProduct] = useState({
   
    nventas: "",
    estado: "",
    cantidad:"",
    price:"",
    vventas:"",
    fecha:"",
    cliente:"",
    cedula:"",
    vendedor:"",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.ventas.getVentasId(ventasId);
      setNewProduct(response);
      console.log("traer informacion");
      console.log(ventasId);
      
    };

    fetchData();
  }, [ventasId]);
  const handleChange = (event) => {
    setNewProduct({ ...newVentas, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    const apiResponse = await api.ventas.edit(newVentas);
    if (apiResponse.err) {
      setError(apiResponse.err.message);
      console.log(apiResponse.err);
    } else {
      setSuccess(apiResponse);
      setVentas([...ventas, newVentas]);
      history.push("/Aventas");
    }
  };
  return (
      <div>
        <header>
          <Container >
            <Row className="titulo d-flex justify-content-center mt-1 mb-5">
              <Col xs={6}>
                <div className="text-center">
                  <h1 > Actualizar Estado de la Venta</h1>
                
                  {error && <Alert variant="danger">{error}</Alert>}
                  {success && <Alert variant="success">{success}</Alert>}
                </div>
              </Col>
            </Row>  
          </Container>
        </header>
        <Container >
          <Row className="d-flex justify-content-center mt-5">
            <Col md={4} xs={6} className="border border-dark rounded d-flex justify-content-center ">{/* bg-info */}
              <ProductForm handleChange={handleChange} handleClick={handleClick} formValue={newVentas}/>
             
            </Col>
          </Row>  
        </Container>
      </div>
    
  );
}

export default Editarproducto;