import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavContainer() {
  return (
    // <nav>
    //     <a href="/">About</a>
    //     <a href="/projects">Projects</a>
    //     <a href="/contact">Contact</a>
    // </nav>
    <Navbar expand="lg" style={{backgroundColor: 'transparent', zIndex: '999',}}>
      <Container>
        <Navbar.Brand href="/" className='permMark'>Jorlyna Pujols</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
