import { Col, Container, Form, Row } from "react-bootstrap";
import Framework from "../../Framework/Framework";
// import { isDate } from "util/types";

const DetailGenerate = (props) => {
  var elements = [];
  for (const key in props.detailObject) {
    if (
      //   Framework.isURL(props.detailObject[key]) ||
      Array.isArray(props.detailObject[key]) ||
      key == "url"
    ) {
      continue;
    }
    elements.push(
      <Form.Group
        as={Row}
        className="mb-1"
        controlId="formPlaintextEmail"
        key={Framework.generate_uuidv4()}
      >
        <Form.Label column sm="6">
          {key}
        </Form.Label>
        <Col sm="6">
          <Form.Control
            plaintext
            readOnly
            defaultValue={
              Framework.isDate(props.detailObject[key])
                ? Framework.getStringOfDate(new Date(props.detailObject[key]))
                : props.detailObject[key]
            }
          />
        </Col>
      </Form.Group>
    );
  }

  return (
    <Form>
      <Container>
        <Row>
          {elements.map((row) => {
            return (
              <Col md="6">
                <div key={Framework.generate_uuidv4()} className="localcard">
                  {row}
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Form>
  );
};
export default DetailGenerate;
