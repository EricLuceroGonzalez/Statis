import React, { Component } from "react";
import Chart from "chart.js";
import PieChart from "./PieChart";

class ChardData extends Component {
  state = {
    canvasRef: React.createRef()
  };

  render() {
    return (
      <div
        className="col-10 mr-auto ml-auto"
        style={{
          borderRadius: "18px",
          border: "2px solid rgba(55, 155, 255, 0.5)"
        }}
      >
        <h2>ChartData</h2>
      </div>
    );
  }
}
export default ChardData;
