import { Container, Row, Col } from "react-bootstrap";
import Producto from "./producto";

const ListaProductos = ({ productos }) => {
  return (
    <Container>
      <Row>
        {productos.map((producto) => (
          <Col xs={4} key={producto._id}>
            <Producto
              producto={producto}
              productos={productos}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaProductos;