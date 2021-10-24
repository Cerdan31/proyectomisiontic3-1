import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const ProductForm = ({handleChange, handleClick, formValue}) =>{
    return(
        <Form>
                <Form.Group as={Row} className="mb-4 mt-4 bold" controlId="formNombre">
                  <Form.Label column sm={2}>
                    Nombre:
                  </Form.Label>
                  <Col md={12}sm={10}>
                    <Form.Control type="text" name="nombre"
                  onChange={handleChange} placeholder="Nombre del producto"
                  value={formValue.nombre}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-4 " controlId="formStock">
                  <Form.Label column sm={2}>
                    Stock:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="stock"
                  onChange={handleChange} placeholder="Stock en tienda"
                  value={formValue.stock} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5" controlId="formPrecio">
                  <Form.Label column sm={2}>
                    Precio:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="precio"
                  onChange={handleChange} placeholder="Precio producto" 
                  value={formValue.precio}/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5" controlId="formUrl">
                  <Form.Label column sm={2}>
                    Url:
                  </Form.Label>
                  <Col md={12} sm={10}>
                    <Form.Control type="text" name="url"
                  onChange={handleChange} placeholder="Url Imagen" 
                  value={formValue.url}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-5">
                  <Col md={12} className="d-flex justify-content-around">
                    {/* <Link to="/producto"> */}
                      <Button onClick={handleClick} type="button">Aceptar</Button>
                    {/* </Link> */}
                    <Link to="/producto">
                      <Button variant="danger" type="button">Cancelar</Button>
                    </Link>
                  </Col>
                </Form.Group>
              </Form>
    );
};

export default ProductForm;