import brand from "../img/brand-logo3.png"
import {Row, Col} from "react-bootstrap"
import {Container,Navbar,Nav,NavDropdown,Offcanvas,Form,FormControl,Button} from "react-bootstrap"
const NavbarProj = () => {
    return (
        
    <div className="sticky-navbar">
<Navbar  expand="md" striped fixed="top" bg="light">
  <Container fluid className="px-0">
    
        <Navbar.Brand href="#" striped className="brand-style">
          <img src={brand} />
        </Navbar.Brand>
    

      <Navbar.Collapse id="navbarScroll" >
    <Row>  
      <Col md={7}><Nav striped 
        className="me-auto my-2 my-lg-0 center-nav"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Nav.Link href="#action1" striped className="px-4">Home</Nav.Link>
        <Nav.Link href="#action2"striped className="px-4">About</Nav.Link>
        <Nav.Link href="#action1"striped className="px-4">Featured</Nav.Link>
        <Nav.Link href="#action2"striped className="px-4">Contact</Nav.Link>
      </Nav>
      </Col>
      
      <Col md={4}><Nav striped className="left-side-nav">
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">
            <button striped className="nav-button">LOGIN</button>
        </Nav.Link>
      </Nav>
      </Col>
      
      
     </Row> 
    </Navbar.Collapse>
    
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    
    
  </Container>
</Navbar>
    </div> );
}
 
export default NavbarProj;