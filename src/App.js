import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./Components/Home";
import SurveyTableComponent from "./Components/Tabla";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Route exact path="/" component={HomeComponent} />
        <Route path='/Stats' component={SurveyTableComponent}></Route>
      </Router>

    </div>
  );
}

export default App;
