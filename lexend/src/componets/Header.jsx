import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight:'bold'}}>Lexend</Navbar.Brand>
          <Nav className="me-auto" style={{fontWeight:"500", marginLeft:'3rem'}}>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#insights">Insights</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="me-auto" style={{fontWeight:"500"}}>
            <Nav.Link href="#demo">Reaquest a demo</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Button variant="success">Start free trial</Button>            
          </Nav>
          <Nav>
          <i style={{position:"relative", top:"10px", }} className="bi bi-globe-americas"></i>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="En"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;