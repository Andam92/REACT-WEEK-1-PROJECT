import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";

function MyNavbar() {
  return (
    <Navbar
      className="d-flex justify-content-between mx-4 mt-3"
      variant="dark"
      style={{ fontSize: 0.9 + "em", backgroundColor: "#221f1f" }}
    >
      <Nav className="d-flex align-items-center">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">TV Shows</Nav.Link>
        <Nav.Link href="#movies">Movies</Nav.Link>
        <Nav.Link href="#recent">Recently Added</Nav.Link>
        <Nav.Link href="#list">My List</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link>icona ricerca</Nav.Link>
        <Nav.Link>KIDS</Nav.Link>
        <Nav.Link>icona campana</Nav.Link>
        <Nav.Link>icona utente</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
