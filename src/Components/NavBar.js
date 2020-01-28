import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const linksNavs = {
  color: "red", 
  margin: '2px 12px'
};

class NavBar extends Component {
  state = {
    collapsed: true
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    // const linksNav = {
    //   margin: "0px 12px",
    //   color: "white",
    //   fontFamily: "Montserrat-BlackItalic",
    //   fontSize: "1.5em"
    // };

    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav
        className="navbar navbar-expand-lg transparent-nav navbar-static-top"
        style={{
          boxShadow: "2px 3px 6px black",
          backgroundColor: "white",
          marginBottom: "3em"
          // rgba(59, 89, 152, 0.95)
          // border: "2px dashed green"
        }}
      >
        <div className="container">
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#3b5999", fontSize: "0.8em" }}
              ></FontAwesomeIcon>
            </span>
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul
              className="navbar-nav mr-auto"
            >
              <li>
                <Link to={"/"} style={linksNavs}>
                  <Button color="primary">Llenar encuesta</Button>{' '}
                </Link>
              </li>
              <li>
                <Link to={"/Stats"} style={linksNavs}>
                <Button color="info">Ver tabla</Button>{' '}
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
