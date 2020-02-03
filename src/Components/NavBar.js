import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linksNavs = {
  margin: "2px 12px"
};

class NavBar extends Component {
  state = {
    collapsed: true
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand transparent-nav fixed-top"
        style={{
          boxShadow: "2px 3px 6px rgba(1,1,1,0.3)",
          backgroundColor: "white",
          marginBottom: "3em"
          // fontSize: '0.8em'
          // rgba(59, 89, 152, 0.95)
          // border: "2px dashed green"
        }}
      >
        <div className="container">
          <div
            className="row"
            // id="navbarResponsive"
          >
            <ul className="navbar-nav mr-auto">
              <li style={linksNavs}>
                <Link to={"/"}>
                  <Button style={{ fontSize: "0.5em", fontWeight: 'bold' }} color="primary">
                    Llenar encuesta
                  </Button>{" "}
                </Link>
              </li>
              <li style={linksNavs}>
                <Link to={"/Stats"}>
                  <Button style={{ fontSize: "0.5em", fontWeight: 'bold' }} color="info">
                    Ver tabla
                  </Button>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
