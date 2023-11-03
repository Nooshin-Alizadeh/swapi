import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavigationBar = (props) => {
  let searchValue;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">SWAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/people"
              onClick={() => {
                props.onClick("people");
              }}
            >
              Person
            </Nav.Link>
            <Nav.Link
              href="/films"
              onClick={() => {
                props.onClick("films");
              }}
            >
              Films
            </Nav.Link>
            <Nav.Link
              href="/species"
              onClick={() => {
                props.onClick("species");
              }}
            >
              Species
            </Nav.Link>

            <Nav.Link
              href="/starships"
              onClick={() => {
                props.onClick("starships");
              }}
            >
              Starships
            </Nav.Link>

            <Nav.Link
              href="/vehicles"
              onClick={() => {
                props.onClick("vehicles");
              }}
            >
              Vehicles
            </Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={(data) => {
                searchValue = data.target.value;
              }}
            />
            <Button
              variant="outline-success"
              onClick={(data) => {
                props.onSearch(data.target.value, searchValue);
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
