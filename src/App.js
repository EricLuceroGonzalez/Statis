import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeComponent from "./Components/Home";
import SurveyTableComponent from "./Components/Tabla";
import FooterComponent from "./Components/Footer";
import './App.css'

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Router>
        <NavBar></NavBar>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/Stats" component={SurveyTableComponent}></Route>
      </Router>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
