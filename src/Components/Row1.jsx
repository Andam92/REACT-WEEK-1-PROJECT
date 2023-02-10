import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Row1() {
  return (
    <div bg="dark" className="mx-4">
      <Row className="d-flex justify-content-between">
        <Col className="d-flex justify-content-start">
          <h2 className="text-light">TV Shows</h2>
          <button
            className="ms-4 text-light"
            style={{
              backgroundColor: "#221f1f",
              border: "1px solid lightgrey",
              padding: "10px 30px",
            }}
          >
            Genres
          </button>
        </Col>
        <Col className="d-flex justify-content-end">
          <p className="text-light pe-3">icona1</p>
          <p className="text-light pe-3">icona1</p>
        </Col>
      </Row>
    </div>
  );
}

export default Row1;
