import React, { Component } from "react";

// import { faHome, faRegistered, faTrademark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import logo from "./media/logo01.png";
class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-12"
        style={{
          //   marginTop: "150px",
          color: "white",
          background:
            "linear-gradient(90deg, rgba(59,86,155,1) 0%, #3b5998 100%)",
          position: "fixed",
          bottom: "0px",
          fontSize: "0.65em",
          fontFamily: "Courier New"
        }}
      >
          creado por Eric Lucero G.
          <div>contacto: ericlucero501@gmail.com</div>
      </div>
    );
  }
}

export default FooterComponent;
