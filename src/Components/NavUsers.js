import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavUsers=({Auth,setAuth})=>{
    return(
        
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='home' as={Link} to='/'>Home</Nav.Link>
            {
                Auth ?
                <>
                <Nav.Link className='user' as={Link} to='/listusers'>Users</Nav.Link>
                <Nav.Link className='logout' onClick={()=>setAuth(false)}>Logout</Nav.Link>
                </>
                :
                <Nav.Link className='login' onClick={()=>setAuth(true)} >Login</Nav.Link>
            }


            
            
          </Nav>
        </Container>
      </Navbar>
        
    )
}
export default NavUsers