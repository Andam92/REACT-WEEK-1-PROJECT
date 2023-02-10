import { Row, Col } from "react-bootstrap";
import ImgPlaceholder from "./Placeholder";

function Row3() {
  return (
    <div className="mb-5">
      <div>
        <h2 className="text-light mx-4 my-3">Watch it Again</h2>
      </div>
      <div>
        <Row className="d-flex m-auto text-center">
          <Col>
            <ImgPlaceholder />
          </Col>
          <Col>
            <ImgPlaceholder />
          </Col>
          <Col>
            <ImgPlaceholder />
          </Col>
          <Col>
            <ImgPlaceholder />
          </Col>
          <Col>
            <ImgPlaceholder />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Row3;
