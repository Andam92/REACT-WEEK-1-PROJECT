import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Logo";
import { FaBell, FaSearch, FaUserAlt } from "react-icons/fa";
function MyNavbar() {
  return (
    <Navbar
      className="d-flex justify-content-between mx-4 mt-3"
      variant="dark"
      style={{ fontSize: 1 + "em", backgroundColor: "#221f1f" }}
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
        <Nav.Link>
          <FaSearch />
        </Nav.Link>
        <Nav.Link>KIDS</Nav.Link>
        <Nav.Link>
          <FaBell />
        </Nav.Link>
        <Nav.Link>
          <FaUserAlt />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default MyNavbar;
