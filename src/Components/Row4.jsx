import { Row, Col } from "react-bootstrap";
import ImgPlaceholder from "./Placeholder";

function Row4() {
  return (
    <>
      <div>
        <h2 className="text-light mx-4 my-3">New Releases</h2>
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
    </>
  );
}

export default Row4;
