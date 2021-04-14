import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>EXOTIC RENTALS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">
              {" "}
              Home{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about-us">
              About Us
            </Nav.Link>
            <NavDropdown title="Brands">
              <NavDropdown.Item>Lamborghini</NavDropdown.Item>
              <NavDropdown.Item>Mercedes</NavDropdown.Item>
              <NavDropdown.Item>Mclaren</NavDropdown.Item>
              <NavDropdown.Item>Ferrari</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>


            {/* <NavDropdown title="Login">
              <NavDropdown.Item>
                <Form >
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
            <Nav.Link as={NavLink} to="/bookmarked">Bookmarked</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
