import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap'

class Signup extends Component {
  render() {
    return (
      <div className="sign-up-page">
          <h1>Create new account</h1><br></br>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New Username</Form.Label>
            <Form.Control type="email" placeholder="Include here" size="50" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Create password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="input"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
