import React, { Component } from "react";
import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class About extends Component {

    handleAlert = () => {
        window.alert("Your message has beem sent!")
        this.props.history.push("/")
    }
render() {
  return (
    <div className="contact">
        <h1 className="Contacth1">Contact Us</h1>
      <Form>
        <FormGroup>
          <Label>First Name (required)</Label>
          <Input
            type="text"
            placeholder="First Name"
          />
        </FormGroup>
        <FormGroup>
          <Label>Last Name (required)</Label>
          <Input
            type="text"
            placeholder="Last Name"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email (Required)</Label>
          <Input
            type="Email"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            placeholder="Phone"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Your Message</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button outline color="warning" className="contactButton" onClick={()=> {this.handleAlert()}}>Submit</Button>
      </Form>
      <div className="info">
        71 High Ave.
        Los Angeles, CA 90001
        <br></br>
        08:00 AM - 07:00 PM M-F
        <br></br>
        rentals@gmail.com
        <br></br>
        (999)-666-777
      </div>
    </div>
    )
  }
}

export default About;
