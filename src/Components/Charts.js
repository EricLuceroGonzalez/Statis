import React, { Component } from "react";
import Chart from "chart.js";

class BarChart extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   dataa: this.props.data,
    //   labless: this.props.labels
    // };
    this.canvasRef = React.createRef();
  }
  componentDidUpdate = () => {

    this.myChart = new Chart(this.canvasRef.current, {
      type: "bar",
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: this.props.data.max
              }
            }
          ]
        }
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
  };

  render() {
    return (
      <div className="col-12 pr-4 pl-4 mr-auto ml-auto mt-2 mb-2">
        <canvas ref={this.canvasRef} height="250"></canvas>
      </div>
    );
  }
}
export default BarChart;

//   componentDidUpdate() {
//     this.myChart.data.labels = this.props.data.map(d => d.label);
//     this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
//     this.myChart.update();
//   }
