import React, { Component } from "react";
import api from "../api/api";
import { Spinner } from "reactstrap";

class SurveyTableComponent extends Component {
  state = {
    allMuestras: []
  };

  componentDidMount() {
    api
      .getMuestras()
      .then(res => {
        this.setState({ allMuestras: res.data });
        console.log({ mensaje: "Get all data", response: res.data });
        console.log(this.state);
      })
      .catch(err => console.log(`GET - ERROR: ${err}`));
  }

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
    ) : (
item < 29.9 ?
<td className="imc-hi">{item}</td> :       <td className="imc-ob">{item}</td>
    );
  };
  renderEncuestas = () => {
    if (this.state.allMuestras.length !== 0) {
      return (
        <div style={{ fontFamily: "Montserrat-ExtraBoldItalic" }}>
          Numero de encuestas: {this.state.allMuestras.length}
        </div>
      );
    }
  };

  render() {
    return (
      <div
        className="table-responsive"
        style={{ margin: "90px 15px", fontFamily: "Poppins-Light" }}
      >
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
              <th className="col-12">Se ejercita al menos 3 x a la semana</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.65em" }}>{this.renderMuestras()}</tbody>
        </table>
      </div>
    );
  }
}

export default SurveyTableComponent;
