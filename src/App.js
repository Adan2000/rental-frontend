import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from './SignUp'
import Bookmarked from "./Bookmarked";
import { connect } from 'react-redux'
import { createUser } from './redux/actions/userActions'



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
      console.log(data)
      if(data.user) {
        this.props.createUser(data.user)
      }
    })
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.props.createUser({user: { } })
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
        <Header handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/signup" render={this.renderSignUpPage} />
          <Route path="/login" render={this.renderLoginPage} />
          {!localStorage.getItem("token") ? <Redirect to="/login" /> : null}
          <Route path="/bookmarked" component={Bookmarked} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

//what we return as an object is what is going to show up as props to our component 

//this function is basically saying, its going to take all of the data in our state
//and we will turn it into props for our component 
//its going to be called with all of our state in our redux store


export default connect(mapStateToProps, {createUser})(withRouter(App))

//whenever the store state changes the provider is automatically notify 
//our connect function, and this function will pass down that state to our component



//option, shift, f
