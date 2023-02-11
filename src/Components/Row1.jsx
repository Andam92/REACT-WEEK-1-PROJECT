import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaThLarge, FaTh } from "react-icons/fa";

function Row1() {
  return (
    <div bg="dark" className="mx-4 mb-5">
      <Row className="d-flex justify-content-between">
        <Col className="d-flex justify-content-start">
          <h2 className="text-light">TV Shows</h2>
          <div className="dropdown ms-4 mt-1">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </button>
            <div
              class="dropdown-menu bg-dark"
              aria-labelledby="dropdownMenuButton"
            >
              <a className="dropdown-item text-white bg-dark" href="#sas">
                Comedy
              </a>
              <a className="dropdown-item text-white bg-dark" href="#sas">
                Drama
              </a>
              <a className="dropdown-item text-white bg-dark" href="#sas">
                Thriller
              </a>
            </div>
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <p className="text-light pe-3">
            <FaThLarge />
          </p>
          <p className="text-light pe-3 ms-3">
            <FaTh />
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Row1;
