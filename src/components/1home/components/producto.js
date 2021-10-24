import Card from "react-bootstrap/Card";

const Producto = ({ producto,productos}) => {
  return (
    <Card style={{ width: "19rem" }}>
      <Card.Img variant="top" src={producto.url} />
      <Card.Body className="text-white bg-dark ">
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>Precio de venta: ${producto.precio}</Card.Text>
        <Card.Text>existencia en Tienda: {producto.stock}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Producto;