import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import {
    Card,
    CardImg,
  } from "reactstrap";
  import { Button, Form, FormGroup, Label, Input } from "reactstrap";

  const API = "http://localhost:3000/api/v1";

class SingleCar extends Component {

    state = {
        car: {
            horsepower: null,
            make: null,
            model: null,
            torque: null, 
            photos: []
        }
    }

    componentDidMount() {
        const token = localStorage.token;
        //if props exist in location then set car 
        //else do fetch     
        fetch(API +  `/car/${this.props.match.params.id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((resp) => resp.json())
        .then((car)=> this.setState({car: car}))
    }
        
        


  render() {

    const { horsepower, make, model, torque, photos } = this.state.car


    return (
      <div>
        <Card className="singlecar">
          <Carousel width="100%" showArrows={true} infiniteLoop={true} className="card" showThumbs={false}>
            <CardImg
              width="100%"
              src={photos[0]?.url}
              alt="Card image cap"
              className="img1"
            />
            <CardImg 
            width="100%"
            src={photos[1]?.url}
            alt="Card image cap"
            />
            <CardImg 
            width="100%" 
            src={photos[2]?.url} 
            alt="Card image cap" 
            />
            <CardImg 
            width="100%" 
            src={photos[3]?.url} 
            alt="Card image cap" 
            />
          </Carousel>
        </Card>
        <h1 className="makemodel">{make} {model}</h1>
        <h1 className="hp">- {horsepower} hp</h1>
        <h1 className="tq">- {torque}</h1>

        <div className="one">
            <h1 className="two">Make Reservation</h1>
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
          <Label>Reservation date (Required)</Label>
          <Input
            type="Email"
            placeholder="ex. 01/02/2021 "
          />
        </FormGroup>
        <FormGroup>
          <Label>Pick Up Time (required)</Label>
          <Input
            type="text"
            placeholder="ex. 08:30 am"
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            placeholder="Phone"
          />
        </FormGroup>
        <Button outline color="warning" className="three" onClick={()=> {this.handleAlert()}}>Make Reservation</Button>
      </Form>
      </div>
      </div>
    );
  }
}

export default SingleCar;
