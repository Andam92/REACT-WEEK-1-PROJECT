import { Row, Col } from "react-bootstrap";

function Row2() {
  return (
    <>
      <div>
        <h2 className="text-light mx-4 my-5">Trending Now</h2>
      </div>
      <div>
        <Row className="d-flex m-auto text-center">
          <Col>PROVA</Col>
          <Col>PROVA</Col>
          <Col>PROVA</Col>
          <Col>PROVA</Col>
          <Col>PROVA</Col>
        </Row>
      </div>
    </>
  );
}

export default Row2;
