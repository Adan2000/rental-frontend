import React, { Component } from "react";
import { connect } from "react-redux";
import { getCars } from "./redux/actions/userActions";
import CarCard from "./CarCard";

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
    let sel;
    if (this.props.selected !== "All"){
    sel = this.props.cars.filter((car) => car.make.includes(this.props.selected)) 
    } else {
      sel = this.props.cars 
    }
    return sel.map((car) => (
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
            <div className="cardcontainer">
              {this.renderCars()}
            </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cars: state.carReducer.cars, selected: state.selectReducer.selected };
};

export default connect(mapStateToProps, {getCars})(Home);
