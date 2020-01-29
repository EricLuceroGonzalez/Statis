import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linksNavs = {
  color: "red",
  margin: "2px 12px"
};

class NavBar extends Component {
  state = {
    collapsed: true
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand transparent-nav navbar-static-top"
        style={{
          boxShadow: "2px 3px 6px black",
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
                  <Button style={{ fontSize: "0.75em" }} color="primary">
                    Llenar encuesta
                  </Button>{" "}
                </Link>
              </li>
              <li style={linksNavs}>
                <Link to={"/Stats"}>
                  <Button style={{ fontSize: "0.75em" }} color="info">
                    Ver tabla
                  </Button>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/login"}
            className="text-title-orange ml-auto"
            style={{ marginLeft: "20px", fontSize: "1.4em" }}
          >
            <div>Login</div>
          </Link>
          {/**          <NavBarItem iconName={faMapMarkerAlt}></NavBarItem> */}
        </div>
      </nav>
    );
  }
}

export default NavBar;
