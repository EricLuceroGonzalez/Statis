import React, { Component } from "react";
import api from "../api/api";
import "./formStyle.css";
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
  fontSize: "0.65em",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease"
};

const labelSty = {
  display: "block",
  margin: "8px 10px 10px 5px",
  color: "gray",
  fontSize: "0.75em",
  fontWeight: "500",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};

class SurveyComponent extends Component {
  state = {
    estatura: "",
    peso: "",
    imc: "",
    lateralidad: "",
    ejercita: "",
    sangre: "",
    genero: ""
  };

  inputChange = e => {
    e.preventDefault();
    const name = e.target.attributes.name.value;
    const value = e.target.value;

    // console.log(e.target);
    // console.log(name);
    // console.log(value);
    this.setState({ [name]: value });

    console.log(this.state);
  };

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
  sendData = () => {
    api
      .postMuestra(this.state)
      .then(res => {
        console.log({ mensaje: "Post exitoso", response: res.data });
      })
      .catch(err => console.log(`Ha occurrido un error: ${err}`));
  };
  render() {
    return (
      <div
        className="col-10 mr-auto ml-auto"
        // style={{ fontSize: "0.55em" }}
      >
        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Estatura (en metros)
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="estatura"
              id="exampleSelect"
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
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="peso"
              id="exampleSelect"
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
              min="5"
              max="99"
              onChange={event => this.inputChange(event)}
              style={inputSty}
              type="number"
              name="edad"
              placeholder="Edad"
            />
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Genero
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="genero"
              id="exampleSelect"
            >
              <option>Femenino</option>
              <option>Masculino</option>
              <option>Otro</option>
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty}>Genero</Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="sangre"
              id="exampleSelect"
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
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="lateralidad"
              id="exampleSelect"
            >
              <option>Der</option>
              <option>Izq</option>
              <option>Ambi</option>
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <Label style={labelSty} for="exampleName">
            Practica deportes al menos 3 dias a la semana
          </Label>

          <div className="col-6 mr-auto ml-auto form-check-inline">
            <label
              className="container"
              style={{
                color: "gray",
                fontSize: "1.15em",
                fontWeight: "500",
                lineHeight: "1",
                textTransform: "uppercase",
                letterSpacing: ".2em"
              }}
            >
              Si
              <input
                type="radio"
                value="si"
                name="ejercita"
                onChange={event => this.inputChange(event)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label
              className="container"
              style={{
                color: "gray",
                fontSize: "1.15em",
                fontWeight: "500",
                lineHeight: "1",
                textTransform: "uppercase",
                letterSpacing: ".2em"
              }}
            >
              No
              <input
                type="radio"
                value="no"
                name="ejercita"
                onChange={event => this.inputChange(event)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <Button className="mt-4" onClick={this.sendData}>
          Submit
        </Button>
      </div>
    );
  }
}

export default SurveyComponent;
