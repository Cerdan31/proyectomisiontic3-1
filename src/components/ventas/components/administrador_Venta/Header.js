import Container from 'react-bootstrap/Container';   
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header =() =>{
    return(
        <header>
            <Container >
                <Row className="titulo d-flex justify-content-center mt-1">
                <Col xs={6}>
                    <div className="text-center">
                    <h1 >Administrador de ventas</h1>
                    </div>
                </Col>
                </Row>  
            </Container>
      </header>
    )
};

export default Header;