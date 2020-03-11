import React, { Component } from "react";
import api from "../api/api";
import axios from "axios";
import ChardData from "./ChartData";
import { Spinner } from "reactstrap";
import BarChart from "./Charts";
import PieChart from "./PieChart";
import { CSVLink } from "react-csv";
import { withRouter } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const header = [
  { label: "Edad", key: "edad" },
  { label: "Estatura", key: "estatura" },
  { label: "Peso", key: "peso" },
  { label: "IMC", key: "imc" },
  { label: "Lateralidad", key: "lateralidad" },
  { label: "Ejercita", key: "ejercita" },
  { label: "Sangre", key: "sangre" },
  { label: "Generp", key: "genero" }
];
// { label: "Fecha", key: "date" },
const headers = [
  { label: "Edad", key: "edad" },
  { label: "Se ejercita 3 veces/semana", key: "ejercita" },
  { label: "Estatura", key: "estatura" },
  { label: "Genero", key: "genero" },
  { label: "IMC", key: "imc" },
  { label: "lateralidad", key: "lateralidad" },
  { label: "peso", key: "peso" },
  { label: "sangre", key: "sangre" }
];
class SurveyTableComponent extends Component {
  state = {
    estatura: [],
    peso: [],
    edad: [],
    data: [],
    labels: [],
    allMuestras: []
  };

  componentDidMount() {
    api
      .getMuestras()
      .then(res => {
        // console.log({ mensaje: "Get all data", response: res.data });
        this.setState({ allMuestras: res.data }, console.log(res.data[0]));
      })
      .catch(err => console.log(`GET - ERROR: ${err}`));
  }

  renderPie = theData => {
    // let edades = this.state.allMuestras.map(item => item.edad);
    let frequencyData = this.state.allMuestras.map(item => item[theData]);

    // let edadData = this.mapFrequency(edades);
    let plotData = this.mapFrequency(frequencyData);

    if (plotData.dataValue === [] || plotData.dataValue === "") {
      return (
        <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
      );
    } else {
      //  console.log("--------------------------");
      console.log(plotData.dataValue);
      console.log(plotData.dataLabel);
      return (
        <PieChart
          data={plotData.dataValue}
          labels={plotData.dataLabel}
          title={"The Plot from function"}
          color={[
            "rgba(25, 255, 132, 0.75)",
            "rgba(12, 119, 252, 0.75)",
            "rgba(154, 62, 245, 0.75)",
            "rgba(255, 206, 86, 0.75)",
            "rgba(245, 12, 222, 0.75)",
            "rgba(255, 12, 192, 0.75)"
          ]}
        />
      );
    }
  };

  renderBar(theData) {
    // console.warn("Inside renderPie");

    // let edades = this.state.allMuestras.map(item => item.edad);
    let frequencyData = this.state.allMuestras.map(item => item[theData]);

    // let edadData = this.mapFrequency(edades);
    let plotData = this.mapFrequency(frequencyData);

    if (plotData.dataValue === [] || plotData.dataValue === "") {
      return (
        <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
      );
    } else {
      //  console.log("--------------------------");
      //  console.log(plotData.dataValue);
      //  console.log(plotData.dataLabel);
      return (
        <BarChart
          data={plotData.dataValue}
          labels={plotData.dataLabel}
          title={"Edad de los participantes"}
          color={[
            "rgba(255, 99, 132, 0.75)",
            "rgba(25, 255, 132, 0.75)",
            "rgba(24, 132, 245, 0.75)",
            "rgba(255, 206, 86, 0.75)",
            "rgba(75, 192, 192, 0.75)",
            "rgba(55, 226, 86, 0.75)",
            "rgba(75, 192, 192, 0.75)",
            "rgba(255, 26, 186, 0.75)",
            "rgba(75, 192, 192, 0.75)",
            "rgba(255, 12, 192, 0.75)"
          ]}
        />
      );
    }
  }

  mapFrequency = someArray => {
    let dataLabel = [];
    let dataValue = [];
    let acc = someArray.reduce(
      (acc, val) => acc.set(val, 1 + (acc.get(val) || 0)),
      new Map()
    );

    for (var clave of acc.keys()) {
      dataLabel.push(`${clave}`);
    }

    for (var val of acc.values()) {
      dataValue.push(val);
    }

    return { dataLabel, dataValue };
  };

  renderMuestras = () => {
    if (this.state.allMuestras.length === 0) {
      return (
        <tr>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
          <td>
            <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
          </td>
        </tr>
      );
    } else {
      const table = this.state.allMuestras.map((item, i) => {
        return (
          <tr key={i}>
            <th scope="row">{i + 1}</th>
            <td>{item.edad}</td>
            <td>{item.estatura}</td>
            <td>{item.peso}</td>
            {this.renderIMCs(item.imc)}
            <td>{item.sangre}</td>
            <td>{item.genero}</td>
            <td>{item.lateralidad}</td>
            <td>{item.ejercita}</td>
          </tr>
        );
      });
      return table;
    }
  };

  //   Peso inferior al normal 	Menos de 18.5
  // Normal 	18.5 – 24.9
  // Peso superior al normal 	25.0 – 29.9
  // Obesidad 	Más de 30.0
  renderIMCs = item => {
    return item < 18.5 ? (
      <td className="imc-min">{item}</td>
    ) : item < 24.9 ? (
      <td className="imc-normal">{item}</td>
    ) : item < 29.9 ? (
      <td className="imc-hi">{item}</td>
    ) : (
      <td className="imc-ob">{item}</td>
    );
  };
  renderEncuestas = () => {
    if (this.state.allMuestras.length !== 0) {
      return (
        <div
          style={{
            fontFamily: "Montserrat-ExtraBoldItalic",
            color: "rgba(71,15,244,1)"
          }}
        >
          <div style={{ fontFamily: "Montserrat-Light" }}>
            Numero de encuestas:{" "}
          </div>
          <div style={{ fontSize: "2.5em" }}>
            {this.state.allMuestras.length}
          </div>
        </div>
      );
    }
  };

  renderCSV() {
    if (this.state.allMuestras.length === 0) {
      return <div>Nothing</div>;
    } else {
      console.log(Object.keys(this.state.allMuestras));
      return (
        <div className="mt-2 mb-4">
          <CSVLink
            data={this.state.allMuestras}
            filename={"my-file.csv"}
            headers={headers}
            separator={","}
            className="btn floatCSV"
            target="_blank"
          >
            Descargar
            <span role="img" aria-label="memo">📝</span>
          </CSVLink>
        </div>
      );
    }
  }
  render() {
    if (this.state.allMuestras.length === 0) {
      return <LoadingPage></LoadingPage>;
    } else {
      return (
        <React.Fragment>
          <div
            className="table-responsive"
            style={{ margin: "90px 15px", fontFamily: "Poppins-Light" }}
          >
            {/*       <ChardData></ChardData>
                  {this.renderBarChart()}


        */}
            {this.renderEncuestas()}
            <table className="table table-striped">
              <thead>
                <tr style={{ fontSize: "0.85em" }}>
                  <th>#</th>
                  <th>Edad</th>
                  <th>Estatura</th>
                  <th>Peso</th>
                  <th>IMC</th>
                  <th>Grupo sanguineo</th>
                  <th>Genero</th>
                  <th>Lateralidad</th>
                  <th>Se ejercita al menos 3 x a la semana</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "0.65em" }}>
                {this.renderMuestras()}
              </tbody>
            </table>
          </div>
          <div>
            <div className="row col-12 mr-auto ml-auto mb-5">
              {this.renderPie("genero")}
              {this.renderPie("sangre")}
              {this.renderPie("ejercita")}
              {this.renderPie("lateralidad")}
              {this.renderBar("edad")}
            </div>

            {this.renderCSV()}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default SurveyTableComponent;
