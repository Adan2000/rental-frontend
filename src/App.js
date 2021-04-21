import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from './SignUp'
import Bookmarked from "./Bookmarked";
import SingleCar from './SingleCar'
import { connect } from 'react-redux'
import { createUser, selectedCars } from './redux/actions/userActions'




const API = "http://localhost:3000/api/v1";

class App extends Component {

  handleAuthResponse = (data) => {
    if (data.user) {
      const { user, jwt } = data;
      this.props.createUser(user)
      localStorage.setItem("token", jwt);
      this.props.history.push("/");
    } else if (data.error) {
    // handle error
    }
  };
  
  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      this.persistUser(token)
    }
  }

  persistUser = (token) => {
    fetch(API +  '/persist', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      if(data.user) {
        this.props.createUser(data.user)
      }
    })
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.createUser({user: { } })
    this.props.history.push("/");
  }


  handleSelect = (e) => {
    this.props.selectedCars(e.target.innerText)

  }

  handleLogin = (e, userInfo) => {
    e.preventDefault();
    console.log("login", userInfo);
    fetch(API + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user: userInfo}),
    })
      .then((resp) => resp.json())
      .then((data) => this.handleAuthResponse(data))
      .catch(console.log);
  };

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    fetch(API + "/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: userInfo }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.handleAuthResponse(data);
      })
      .catch(console.log);
  };

  renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} />;
  renderSignUpPage = () => <Signup handleLoginOrSignup={this.handleSignup} />;
  
  render() {
    return (
      <div>
        <Header handleLogout={this.handleLogout} handleSelect={this.handleSelect}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/signup" render={this.renderSignUpPage} />
          <Route path="/login" render={this.renderLoginPage} />
          <Route path="/bookmarked" component={Bookmarked} />
          <Route path="/car-preview" component={SingleCar} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, cars: state.carReducer.cars}
}

export default connect(mapStateToProps, {createUser, selectedCars})(withRouter(App))

