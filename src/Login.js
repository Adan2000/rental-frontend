import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="log-in-page">
        <Form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
          <Form.Group >
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="text" 
            name="username" 
            value={this.state.username} 
            onChange={this.handleChange} 
            placeholder="Username" 
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" value="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
