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
    console.log("********8  inside Bar");

    console.log(this.props.data);
    // console.log(this.state.labels);
    this.myChart = new Chart(this.canvasRef.current, {
      type: "bar",
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 55
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
      <React.Fragment>
        <div className="col-10 mr-auto ml-auto">
          <canvas ref={this.canvasRef} />
        </div>
      </React.Fragment>
    );
  }
}
export default BarChart;

//   componentDidUpdate() {
//     this.myChart.data.labels = this.props.data.map(d => d.label);
//     this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
//     this.myChart.update();
//   }
