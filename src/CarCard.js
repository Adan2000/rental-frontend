import React, { Component }from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

class CarCard extends Component {
  render() {
    const { photos, make, model, horsepower, torque } = this.props;
    console.log(this.props)
    return (
      <CardDeck>
        <Card>
          <CardImg
            top
            width="100%"
            src={photos[0].url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted">{make}</CardTitle>
            <Button>View</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={photos[1].url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted">{make}</CardTitle>
            <Button>View</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src={photos[2].url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted">{make}</CardTitle>
            <Button>View</Button>
          </CardBody>
        </Card>
      </CardDeck>
    );
  }
}

export default CarCard;
