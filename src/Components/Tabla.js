import React, { Component } from "react";
import api from "../api/api";
// import { Spinner } from "reactstrap";

class SurveyTableComponent extends Component {
  state = {
    allMuestras: []
  };

  UNSAFE_componentWillMount() {
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
      <div>
        <table style={{ marginTop: "120px" }} className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Edad</th>
              <th scope="col">Estatura</th>
              <th scope="col">Peso</th>
              <th scope="col">Grupo sanguineo</th>
              <th scope="col">Genero</th>
              <th scope="col">Lateralidad</th>
              <th scope="col">Se ejercita al menos tres veces a la semana</th>
              <th scope="col">Indice de masa corporal</th>
            </tr>
          </thead>
          <tbody>
            {this.renderMuestras()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SurveyTableComponent;
