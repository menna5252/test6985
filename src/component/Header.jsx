import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="mynav">
      <Container>
        <h3 className="my-2">
          <Link to="/" className="text-white text-decoration-none">
            Start Framework
          </Link>
        </h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-white fw-bold" as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/portfolio">
              PORTFOLIO
            </Nav.Link>
            <Nav.Link className="text-white fw-bold" as={Link} to="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
