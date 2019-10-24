import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Header from "./cmpt/Header";
import Login from "./cmpt/Login";
import CreateNew from "./cmpt/CreateNew";
import Landing from "./cmpt/Landing";
import Home from "./Home";
import { BrowserRouter as Router,Switch,Route,useHistory } from "react-router-dom";



class App extends Component {

  // submit() {
  //   useHistory().push("/home");
  // }

  render() {
    return (
      <div className="App">
        <Header title="Black Lotus" />
        {/* <p className="App-intro">{this.state.response}</p> */}
        {/* <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=463975&type=card" alt="Serra"/> */}
        <Router>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/login" component={Login}/>
            <Route path="/sign" component={CreateNew}/>
            <Route path="/home" component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
