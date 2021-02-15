import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from '../CartWidget';

const NavbarComponent = () => {
    return (
        <>
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Mycotek</Navbar.Brand>
    <Nav className="mr-auto ">
      <Nav.Link href="#kits">Kits de Cultivo</Nav.Link>
      <Nav.Link href="#sustratos">Sustratos</Nav.Link>
      <Nav.Link href="#instrumental">Instrumental</Nav.Link>
    </Nav>
    <CartWidget/>
  </Navbar>
            
        </>
    )
}

export default NavbarComponent;