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
import {Link} from 'react-router-dom'
// import SingleCar from "./SingleCar";
import {connect} from 'react-redux'

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
      .catch(console.log);
  }

  
  render() {

    const { photos, make, model } = this.props;

    return (
      <div>
          <Card>
            <Carousel width="100%" showArrows={true} infiniteLoop={true} className="card" showThumbs={false}>

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
              <CardTitle tag="h5" className="mb-2 text-muted">
                <Link onClick={()=>{this.handleProps(this.props)}}to="/car-preview" className="linktag">{make} {model}</Link>
              </CardTitle>
              
              <Button className="viewbutton" size="sm" outline color="warning"><Link className="view" to={{pathname: `/car-preview/${this.props.id}`,car:this.props }}>View</Link> </Button> 
              
              {localStorage.getItem("token")   && <Button size="sm" outline color="warning" onClick={(e)=> this.handleBookMark(e)}>Bookmark</Button>}
            </CardBody>
          </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.carReducer.cars, 
    selected: state.selectReducer.selected, 
    user: state.userReducer.user 
  }
}

export default connect(mapStateToProps)(CarCard)









// && bookmark.car.id == car.id

// this.props.user.bookmarks

// (e)=> this.handleBookMark(e)

//this.props.id   CAR ID

//this.props.user.bookmarks BOOKMARK