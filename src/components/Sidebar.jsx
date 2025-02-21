import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import iconLogo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <aside className="col col-2">
      <Navbar expand="md" fixed="left" className="flex-column align-items-start" id="sidebar">
        <Navbar.Brand href="index.html">
          <img src={iconLogo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column mb-auto">
            <Nav.Link href="#" className="d-flex align-items-center">
              <HouseDoorFill className="me-2" /> Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center">
              <BookFill className="me-2" /> Your Library
            </Nav.Link>
            <Form className="mt-3">
              <Form.Group className="d-flex">
                <Form.Control type="text" placeholder="Search" />
                <Button variant="outline-secondary" size="sm">
                  GO
                </Button>
              </Form.Group>
            </Form>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn d-flex flex-column ">
          <Button variant="primary" className="signup-btn">
            Sign Up
          </Button>
          <Button variant="secondary" className="login-btn">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </div>
      </Navbar>
    </aside>
  );
};

export default Sidebar;
