import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, CardImg, CardTitle, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import {deleteBookMark} from './redux/actions/userActions'


const API = "http://localhost:3000/api/v1/bookmarks"

class Bookmarked extends Component {



    handleDelete = (bookmark) => {
        console.log(bookmark)
        const token = localStorage.token
        fetch(API + `/${bookmark}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => this.props.deleteBookMark(bookmark))
    }

  render() {
    return (
      <div className="bookmarked">
        {this.props.bookmarks.map((bookmark) => {
          console.log(bookmark);
          return (
            <Card>
              <Link to="/car-preview">
                <Carousel
                  width="100%"
                  showArrows={true}
                  infiniteLoop={true}
                  className="card"
                  showThumbs={false}
                >
                  <CardImg
                    width="100%"
                    src={bookmark.car.photos[0].url}
                    alt="Card image cap"
                    className="img1"
                  />
                  <CardImg
                    width="100%"
                    src={bookmark.car.photos[1].url}
                    alt="Card image cap"
                  />
                  <CardImg
                    width="100%"
                    src={bookmark.car.photos[2].url}
                    alt="Card image cap"
                  />
                  <CardImg
                    width="100%"
                    src={bookmark.car.photos[3].url}
                    alt="Card image cap"
                  />
                </Carousel>
              </Link>
              <CardBody className="body">
                {!localStorage.getItem("token") ? (
                  <>
                    <CardTitle tag="h5" className="mb-2 text-muted">
                      {" "}
                      {bookmark.car.make} {bookmark.car.model}{" "}
                    </CardTitle>
                  </>
                ) : (
                  <>
                    <CardTitle tag="h5" className="mb-2 text-muted">
                      {" "}
                      {bookmark.car.make} {bookmark.car.model}{" "}
                    </CardTitle>
                    <Button size="sm" outline color="danger" onClick={()=>this.handleDelete(bookmark.id)}> Remove </Button>
                  </>
                )}
              </CardBody>
            </Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookmarks: state.userReducer.user.bookmarks,
  };
};

export default connect(mapStateToProps, {deleteBookMark})(Bookmarked);
