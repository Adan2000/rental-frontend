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
import { Link } from 'react-router-dom'

const API = "http://localhost:3000/api/v1"


class CarCard extends Component {

  handleBookMark = () => {
    const token = localStorage.token;
    fetch(API + "/bookmarks", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookmark: {user_id: this.props.user.id, car_id: this.props.id} }),
    })
      .then((resp) => resp.json())
      // .then((res) => console.log(res))
      .catch(console.log);
  }

  render() {

    const { photos, make, model } = this.props;

    return (
      <div>
          <Card>
            <Link to="/car-preview">
            <Carousel width="100%" showArrows={true} infiniteLoop={true} className="card" showThumbs={false}>
              <CardImg 
                width="100%"
                src={photos[0].url}
                alt="Card image cap"
                className="img1"
                onClick={this.handleRoute}
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
            </Link>
            <CardBody className="body">
              {!localStorage.getItem("token") ? 
              <>
              <CardTitle tag="h5" className="mb-2 text-muted">{make} {model}</CardTitle>
              </>:<>
              <CardTitle tag="h5" className="mb-2 text-muted">{make} {model}</CardTitle>
              <Button onClick={(e)=> this.handleBookMark(e)}>Bookmark</Button> </>}
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default CarCard;
