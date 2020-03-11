import React, { Component } from "react";
import { CardImg, Spinner } from "reactstrap";
const formBg = {
  backgroundColor: "rgba(222,222,222,0.35)",
  padding: "10px 15px",
  borderRadius: "16px",
  height: "100vh"
};

class LoadingPage extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-12 col-sm-10 col-md-8 col-lg-8 ml-auto mr-auto"
        style={formBg}
      >
        <div className="col-12 ml-auto mr-auto" style={{ textAlign: "center" }}>
          <div>
            <span
              style={{
                fontFamily: "Montserrat-ExtraBold",
                fontSize: '2em'
              }}
            >
              Cargando datos
            </span>
            <Spinner
              type="grow"
              style={{
                marginTop: "30%",
                color: "rgba(155,74,177,0.75)"
              }}
            />
            <Spinner
              type="grow"
              style={{
                marginTop: "30%",
                color: "rgba(155,74,177,0.75)"
              }}
            />
            <Spinner
              type="grow"
              style={{
                marginTop: "30%",
                color: "rgba(155,74,177,0.75)"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingPage;
