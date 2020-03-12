import React, { Component } from "react";
import Chart from "chart.js";

const pieStyle = {
  backgroundColor: "rgba(230,230,230,0.25)",
  boxShadow: "3px 5px 5px gray",
  padding: "10px 7px"
};
class PieChart extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dataa: this.props.data,
    //   labless: this.props.labels
    // };
    this.canvasRef = React.createRef();
  }
  componentDidUpdate() {
    this.myChart = new Chart(this.canvasRef.current, {
      type: "doughnut",
      options: {
        maintainAspectRatio: false
      },
      data: {
        labels: this.props.labels,
        datasets: [
          {
            label: this.props.title,
            data: this.props.data,
            backgroundColor: this.props.color
          }
        ]
      }
    });
  }
  render() {
    return (
      <div className="pr-4 pl-4 mr-auto ml-auto mt-2 mb-2" style={pieStyle}>
        <div>
          <canvas ref={this.canvasRef} width="250" height="250"></canvas>
        </div>
        <h4 style={{fontSize: '0.65em', marginTop: '10px', fontFamily: 'Montserrat-ExtraBold'}}>{this.props.theTitle}</h4>
      </div>
    );
  }
}

export default PieChart;
