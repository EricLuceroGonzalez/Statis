import React, { Component } from "react";

// import { faHome, faRegistered, faTrademark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "./media/logo01.png";
class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div
        className="container col-12"
        style={{
          //   marginTop: "150px",
          color: "white",
          background:
            "linear-gradient(90deg, rgba(59,86,155,1) 0%, #3b5998 100%)",
          position: "fixed",
          bottom: "0px"
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "0.35em",
            fontFamily: "Courier New"
          }}
        >
          creado por Eric Lucero G.
          <span>contacto: ericlucero501@gmail.com</span>
        </p>
      </div>
    );
  }
}

export default FooterComponent;
