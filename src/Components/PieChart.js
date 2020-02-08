import React, { Component } from "react";
import Chart from "chart.js";

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
        maintainAspectRatio: false,
      },
      data: {
        labels: this.props.labels,
        datasets: [
          {
            label: this.props.title,
            data: this.props.data,
            // backgroundColor: this.props.color
          }
        ]
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-10 mr-auto ml-auto">
          <canvas ref={this.canvasRef} />
        </div>
      </React.Fragment>
    );
  }
}

export default PieChart;
