import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap'

class Signup extends Component {


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
      <div className="sign-up-page">
          <h1>Create new account</h1><br></br>
        <Form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)} >
          <Form.Group >
            <Form.Label>New Username</Form.Label>
            <Form.Control 
            name="username"
            type="text" 
            placeholder="Include here"
            value={this.state.username} 
            onChange={this.handleChange}  />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Create Account
          </Button >
        </Form>
      </div>
    );
  }
}

export default Signup;
