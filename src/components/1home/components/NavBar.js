import Nav from 'react-bootstrap/Nav'
const NavBar = ({ pagina}) => {
    return(
        <Nav justify variant="tabs" defaultActiveKey={pagina} className="explorer">
        <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/Aventas"eventKey="/Aventas">VENTAS</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/producto" eventKey="/producto">PRODUCTOS</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/usuarios" eventKey="/usuarios">USUARIOS</Nav.Link>
        </Nav.Item> 
        </Nav>

    );
}

export default NavBar;