import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from './SignUp'
import Bookmarked from "./Bookmarked";
import { connect } from 'react-redux'
import { createUser } from './redux/actions/userActions'

//first import connect from react-redux


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

  //after we imported it and we passed it as an arguement to our mapStateToProps function
  //we now call it by saying this.props.createUser
  //that action takes in ana argument(user), that is what our payload will be. 
  
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
    this.props.history.push("/");
  }

  handleSelect = (e) => {
    console.log(e.target.innerHTML)
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
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {user: state.user}
}
//the key in the object should match up with the data key in the state. 
//console.log(state) to see what the key is.

//we are basically saying that when we say..
//this.props.user === { user: state.user }

//what we return as an object is what is going to show up as props to our component 

//this function is basically saying, 
//it is going to get our state, and it will return it as props inside of our component.
//its going to be called with all of the data inside our redux store. All.


export default connect(mapStateToProps, {createUser})(withRouter(App))

//connect can be used to get state from our store and get actions as well to our components.
//now we pass our action to the second argument, the connect will pass it down to our App 
//component as pass it down as a prop. 

//we then will call connect.
//pass in the component as the second argument.
//we then will define mapStateToProps.
//mapStateToProps will ALWAYS get in a argument of state.
//we will ALWAYS return an object that will show up as props inside of our component.

//whenever the store state changes the provider is automatically notify 
//our connect function, and this function will pass down that state to our component



//option, shift, f
