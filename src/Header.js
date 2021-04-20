import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { connect } from 'react-redux'

const Header = props => {
  
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
            {!localStorage.getItem("token") ? 
            <>
            <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Log In</Nav.Link>
            </>:<>
            <Nav.Link as={NavLink} to="/bookmarked">Bookmarked</Nav.Link>
            <Nav.Link ><div onClick={props.handleLogout}>Log out</div></Nav.Link>
            </>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(withRouter(Header))