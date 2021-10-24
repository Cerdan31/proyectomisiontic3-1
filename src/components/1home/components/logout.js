import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const Logout = () =>{
    const logoutOk = () => {
        localStorage.removeItem("token");
        
    } 
    
    return(
        <div className="logout">
        <Link to="/">
        <Button className="logout" variant="outline-primary" onClick={logoutOk}>Logout</Button>
        </Link>
        </div>
    );
}

export default Logout;