import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Header from './Header'
import Home from './Home'
import Signup from './SignUp'
import Login from './Login'
import Bookmarked from './Bookmarked'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/bookmarked" component={Bookmarked} />
      </Switch>
    </div>
  );
}

export default App;

//option, shift, f
