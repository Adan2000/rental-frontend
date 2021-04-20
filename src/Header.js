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
            <NavDropdown title="Categories">
              <NavDropdown.Item><div onClick={(e) => props.handleSelect(e)}>Lamborghini</div></NavDropdown.Item>
              <NavDropdown.Item><div onClick={(e) => props.handleSelect(e)}>Mercedes</div></NavDropdown.Item>
              <NavDropdown.Item><div onClick={(e) => props.handleSelect(e)}>Mclaren</div></NavDropdown.Item>
              <NavDropdown.Item><div onClick={(e) => props.handleSelect(e)}>Ferrari</div></NavDropdown.Item>
              <NavDropdown.Item><div onClick={(e) => props.handleSelect(e)}>All</div></NavDropdown.Item>
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