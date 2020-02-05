import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linksNavs = {
  margin: "1px 12px"
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
          marginBottom: "1em",
          fontFamily: "Montserrat-ExtraBold"
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
                  <Button
                    style={{
                      fontSize: "0.5em",
                      textShadow: "1px 1px 2px black",
                      backgroundColor: 'rgba(155,74,177,0.75)'
                    }}
                    color="primary"
                  >
                    Llenar encuesta
                  </Button>{" "}
                </Link>
              </li>
              <li style={linksNavs}>
                <Link to={"/Stats"}>
                  <Button
                    style={{
                      fontSize: "0.5em",
                      textShadow: "1px 1px 2px black",
                      backgroundColor: 'rgba(155,74,177,1)'
                    }}
                    color="info"
                  >
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
