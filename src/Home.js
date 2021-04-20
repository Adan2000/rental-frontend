import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars } from "./redux/actions/userActions";
import CarCard from "./CarCard";
import { CardDeck } from "reactstrap";
import { Container, Row, Col } from "react-bootstrap";

const carAPI = "http://localhost:3000/api/v1/cars";

class Home extends Component {
  componentDidMount() {
    fetch(carAPI)
      .then((res) => res.json())
      .then((data) => {
        this.props.getCars(data);
      });
  }

  renderCars = () => {
    return this.props.cars.map((car) => (
      <CarCard
        key={car.id}
        photos={car.photos}
        model={car.model}
        make={car.make}
        horsepower={car.horsepower}
        torque={car.torque}
      />
    ));
  };

  render() {
    return (
      // <Container>
      //   <Row>
      //     <Col>
            <div className="cardcontainer">
              {this.renderCars()}
            </div>
          /* </Col>
        </Row>
      </Container> */
    );
  }
}

const mapStateToProps = (state) => {
  return { cars: state.carReducer.cars };
};

export default connect(mapStateToProps, { getCars })(Home);
