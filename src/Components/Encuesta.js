import React, { Component } from "react";
import {
  // Container,
  // ButtonGroup,
  Button,
  // Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const inputSty = {
  outline: "none",
  display: "block",
  background: "rgba(1,1,1, 0.1)",
  width: "100%",
  border: "0",
  borderRadius: "4px",
  padding: "8px 20px",
  color: "gray",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease"
};

const labelSty = {
  display: "block",
  margin: "20px 10px 10px 5px",
  color: "gray",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};

const labelNameSty = {
  display: "block",
  margin: "0 0 10px",
  color: "gray",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};

class SurveyComponent extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      //   ligaId: this.props.id,
      nombre: "",
      apellido: "",
      estatura: "",
      peso: "",
      imc: "",
      lateralidad: "",
      ejercita: "",
      sangre: "",
      genero: ""
    };
  }
  renderEstatura = () => {
    var options = [];
    var centimeter = 1.4;
    for (let i = 0; i < 70; i++) {
      centimeter = centimeter + 0.01;
      options.push(<option key={i}>{centimeter.toFixed(2)}</option>);
    }
    return options;
  };
  renderPeso = () => {
    var options = [];
    var peso = 90;
    for (let i = 0; i < 130; i++) {
      peso = peso + 1;
      options.push(<option key={i}>{peso}</option>);
    }
    return options;
  };
  render() {
    return (
      <React.Fragment>
        <div className="mr-auto ml-auto">
          {/**          <h3 style={labelNameSty}>{this.state.title}</h3> */}
          <hr></hr>
        </div>

        <div className="col-12">
          <FormGroup className="col-12">
            <Input
              onChange={event => this.state.inputChange(event)}
              style={inputSty}
              type="name"
              name="nombre"
              placeholder="Nombre"
              className="col-6 mr-auto ml-auto"
            />
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Estatura (en metros)
            </Label>
            <Input
              type="select"
              style={inputSty}
              name="select"
              id="exampleSelect"
              className="col-6 mr-auto ml-auto"
            >
              {this.renderEstatura()}
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Peso (en libras)
            </Label>
            <Input
              type="select"
              style={inputSty}
              name="select"
              id="exampleSelect"
              className="col-6 mr-auto ml-auto"
            >
              {this.renderPeso()}
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Edad
            </Label>
            <Input
              onChange={event => this.state.inputChange(event)}
              style={inputSty}
              type="number"
              name="edad"
              placeholder="Edad"
              className="col-6  mr-auto ml-auto"
            />
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Genero
            </Label>
            <Input
              type="select"
              style={inputSty}
              name="select"
              id="exampleSelect"
              className="col-6 mr-auto ml-auto"
            >
              <option>Femenino</option>
              <option>Masculino</option>
              <option>Otro</option>
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Genero
            </Label>
            <Input
              type="select"
              style={inputSty}
              name="select"
              id="exampleSelect"
              className="col-6 mr-auto ml-auto"
            >
              <option>O-</option>
              <option>O+</option>
              <option>A-</option>
              <option>A+</option>
              <option>B-</option>
              <option>B+</option>
              <option>AB-</option>
              <option>AB+</option>
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Lateralidad
            </Label>
            <Input
              type="select"
              style={inputSty}
              name="select"
              id="exampleSelect"
              className="col-6 mr-auto ml-auto"
            >
              <option>Derecho</option>
              <option>Izquierdo</option>
              <option>Ambidiestro</option>
            </Input>
          </FormGroup>
        </div>
        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label
              style={labelSty}
              for="exampleName"
              className="col-8 mr-auto ml-auto"
            >
              Practica deportes al menos 3 dias a la semana
            </Label>
            <Input
              type="select"
              style={inputSty}
              name="select"
              id="exampleSelect"
              className="col-6 mr-auto ml-auto"
            >
              <option>No</option>
              <option>Si</option>
            </Input>
          </FormGroup>
        </div>

        <Button onClick={this.state.sendTeamData}>Submit</Button>
      </React.Fragment>
    );
  }
}

export default SurveyComponent;
