import React, { Component } from "react";
import api from "../api/api";
import axios from "axios";
import { Spinner } from "reactstrap";
import BarChart from "./Charts";
import ChardData from "./ChartData";
import PieChart from "./PieChart";

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
        this.setState({ allMuestras: res.data });
      })
      .catch(err => console.log(`GET - ERROR: ${err}`));
  }

  //   componentDidUpdate(){
  //   axios
  //     .get("http://localhost:8000/api/chartData")
  //     .then(theData => {
  //       this.setState({
  //         edad: theData.data.edad,
  //         estatura: theData.data.estatura,
  //         peso: theData.data.peso
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  renderBar() {
    console.warn("Inside renderBar");

    let edades = this.state.allMuestras.map(item => item.edad);
    let generos = this.state.allMuestras.map(item => item.genero);
    // console.log(this.state.edad);

    let edadData = this.mapFrequency(edades);
    let generoData = this.mapFrequency(generos);

    if (
      edadData.dataValue === [] ||
      (edadData.dataValue === "" && generoData.dataValue === []) ||
      generoData.dataValue === ""
    ) {
      return (
        <Spinner className="mr-auto ml-auto" type="grow" color="primary" />
      );
    } else {
      console.log("--------------------------");
      console.log(edadData.dataValue);
      console.log(edadData.dataLabel);
      return (
        // <BarChart
        //   data={edadData.dataValue}
        //   labels={edadData.dataLabel}
        //   // data={[20, 10, 21, 22, 13, 23, 18, 1]}
        //   // labels={["20", "21", "19", "26", "22", "17", "18", "23"]}
        //   title={"The Plot from function"}
        //   color="blue"
        // />
        <PieChart
        data={generoData.dataValue}
        labels={generoData.dataLabel}
        // data={[20, 10, 21, 22, 13, 23, 18, 1]}
        // labels={["20", "21", "19", "26", "22", "17", "18", "23"]}
        title={"The Plot from function"}
        // color="blue"
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
      // -----------------------
      // let arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
      // console.log(this.mapFrequency(arr));

      // let culo = this.state.allMuestras.map(item => item.edad);
      // let acd = this.mapFrequency(culo);
      // console.log(acd);
      // console.log("******");

      // for (var clave of acd.keys()) {
      //   console.log(clave);
      // }

      // for (var clave of acd.values()) {
      //   console.log(`val: ${clave}`);
      // }

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
  renderBarChart = () => {
    if (this.state.labels === undefined) {
      return <div>Fuck</div>;
    } else {
      const abla = this.state.data.map((item, i) => {
        console.log(item);
        return item;
      });
      console.log(abla);

      return <BarChart data={abla}></BarChart>;
    }
  };

  render() {
    return (
      <div
        className="table-responsive"
        style={{ margin: "90px 15px", fontFamily: "Poppins-Light" }}
      >
        {/*       <ChardData></ChardData>
                  {this.renderBarChart()}

        */}
        {this.renderEncuestas()}
        <div>{console.log(this.state.data)}</div>
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
          <tbody style={{ fontSize: "0.65em" }}>{this.renderMuestras()}</tbody>
        </table>
        <ChardData></ChardData>
        <div>
          <h5>Graficas</h5>
          <BarChart
            data={[40, 10, 21, 2, 3, 3, 2, 1]}
            labels={["20", "21", "19", "26", "22", "17", "18", "23"]}
            title={"The Plot"}
            color="red"
          />
          {this.renderBar()}
        </div>
      </div>
    );
  }
}

export default SurveyTableComponent;
