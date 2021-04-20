import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";

class CarCard extends Component {
  render() {
    const { photos, make, model } = this.props;

    return (
      <div>
          <Card>
            <Carousel width="100%" showArrows={true} infiniteLoop={true} className="card" showThumbs={false} >
              <CardImg 
                width="100%"
                src={photos[0].url}
                alt="Card image cap"
                className="img1"
              />
              <CardImg
                width="100%"
                src={photos[1].url}
                alt="Card image cap"
              />
              <CardImg
                width="100%"
                src={photos[2].url}
                alt="Card image cap"
              />
              <CardImg
                width="100%"
                src={photos[3].url}
                alt="Card image cap"
              />
            </Carousel>
            <CardBody className="body">
              {!localStorage.getItem("token") ? 
              <>
              <CardTitle tag="h5" className="mb-2 text-muted">{make} {model}</CardTitle>
              </>:<>
              <CardTitle tag="h5" className="mb-2 text-muted">{make} {model}</CardTitle>
              <Button>Bookmark</Button> </>}
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default CarCard;
