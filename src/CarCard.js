import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardDeck,
  CardBody,
  ButtonGroup,
} from "reactstrap";

class CarCard extends Component {
  render() {
    const { photos, make, model, horsepower, torque, id } = this.props;
    // console.log(this.props);
    return (
      <div>
          <Card>
            <Carousel
              width="100%"
              showArrows={true}
              infiniteLoop={true}
              className="cara"
            >
              <CardImg
                top
                width="100%"
                src={photos[0].url}
                alt="Card image cap"
                className="img1"
              />
              <CardImg
                top
                width="100%"
                src={photos[1].url}
                alt="Card image cap"
              />
              <CardImg
                top
                width="100%"
                src={photos[2].url}
                alt="Card image cap"
              />
              <CardImg
                top
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
              <Button >Bookmark</Button> </>}
            </CardBody>
          </Card>
      </div>
      /* <Card>
          <Carousel width="50%">
            <CardImg top width="50%" src={photos[0].url} alt="Card image cap"/>
            <CardImg top width="50%" src={photos[1].url} alt="Card image cap" />
            <CardImg top width="50%" src={photos[2].url} alt="Card image cap" />
            <CardImg top width="50%" src={photos[3].url} alt="Card image cap" />
          </Carousel>
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted">
              {make}
            </CardTitle>
            <Button>View</Button>
          </CardBody>
        </Card>
        <Card>
          <Carousel width="50%">
            <CardImg top width="50%" src={photos[0].url} alt="Card image cap"/>
            <CardImg top width="50%" src={photos[1].url} alt="Card image cap" />
            <CardImg top width="50%" src={photos[2].url} alt="Card image cap" />
            <CardImg top width="50%" src={photos[3].url} alt="Card image cap" />
          </Carousel>
          <CardBody>
            <CardTitle tag="h5" className="mb-2 text-muted">
              {make}
            </CardTitle>
            <Button>View</Button>
          </CardBody>
        </Card> */

      //     <Card>
      //       <CardImg top width="100%" src={photos[1].url} alt="Card image cap" />
      //       <CardBody>
      //         <CardTitle tag="h5" className="mb-2 text-muted">
      //           {make}
      //         </CardTitle>
      //         <Button>View</Button>
      //       </CardBody>
      //     </Card>
      //     <Card>
      //       <CardImg top width="100%" src={photos[2].url} alt="Card image cap" />
      //       <CardBody>
      //         <CardTitle tag="h5" className="mb-2 text-muted">
      //           {make}
      //         </CardTitle>
      //         <Button>View</Button>
      //       </CardBody>
      //     </Card>
      //     <Card>
      //       <CardImg top width="100%" src={photos[3].url} alt="Card image cap" />
      //       <CardBody>
      //         <CardTitle tag="h5" className="mb-2 text-muted">
      //           {make}
      //         </CardTitle>
      //         <Button>View</Button>
      //       </CardBody>
      //     </Card>
      //   </CardDeck>

      // <Carousel>
      // <div>
      //   <img src={photos[0].url} />
      //   <p className="legend">Legend 1</p>
      // </div>
      // <div>
      //   <img src={photos[1].url} />
      //   <p className="legend">Legend 2</p>
      // </div>
      // <div>
      //   <img src={photos[2].url} />
      //   <p className="legend">Legend 3</p>
      // </div>
      // </Carousel>
    );
  }
}

export default CarCard;
