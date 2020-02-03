import React, { Component } from "react";
import api from "../api/api";
// import { Spinner } from "reactstrap";

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
    const table = this.state.allMuestras.map((item, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{item.edad}</td>
          <td>{item.estatura}</td>
          <td>{item.peso}</td>
          <td>{item.sangre}</td>
          <td>{item.genero}</td>
          <td>{item.lateralidad}</td>
          <td>{item.ejercita}</td>
          <td>{item.edad}</td>
        </tr>
      );
    });
    return table;
  };
  render() {
    return (
      <div className="table-responsive text-nowrap">
        <table style={{ marginTop: "120px" }} className="table table-striped w-auto">
          <thead>
            <tr style={{ fontSize: "0.65em" }}>
              <th >#</th>
              <th >Edad</th>
              <th >Estatura</th>
              <th >Peso</th>
              <th >Grupo sanguineo</th>
              <th >Genero</th>
              <th >Lateralidad</th>
              <th >Se ejercita al menos tres veces a la semana</th>
              <th >Indice de masa corporal</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "0.65em" }}>{this.renderMuestras()}</tbody>
        </table>
      </div>
    );
  }
}

export default SurveyTableComponent;
