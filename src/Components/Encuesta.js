import React, { Component } from "react";
import api from "../api/api";
import cogoToast from "cogo-toast";
import "./formStyle.css";
import {
  Button,
  Badge,
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
  padding: "2px 20px",
  color: "gray",
  fontFamily: "inherit",
  fontSize: "0.65em",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease"
};

const labelSty = {
  display: "block",
  margin: "8px 10px 3px 5px",
  color: "gray",
  fontSize: "0.75em",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};

class SurveyComponent extends Component {
  state = {
    activeThumb: false,
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
    if (this.state.estatura && this.state.peso !== "") {
      this.calculaIMC(this.state.peso, this.state.estatura);
    }
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
    this.setState({
      activeThumb: !this.state.activeThumb
    });
    // api
    //   .postMuestra(this.state)
    //   .then(res => {
    //     // console.log({ mensaje: "Post exitoso", response: res.data });
    //     const { hide } = cogoToast.success(
    //       <div style={{ color: "rgba(63,10,88,1)" }}>
    //         <b>Gracias!</b>
    //         <div
    //           style={{
    //             fontFamily: "Montserrat-ExtraBold"
    //           }}
    //         >
    //           Tu indice de masa corporal es:
    //         </div>
    //         <div
    //           style={{
    //             fontFamily: "Montserrat-ExtraBoldItalic",
    //             color: "rgba(71,15,244,1)",
    //             fontSize: "1.5em"
    //           }}
    //         >
    //           {this.state.imc}
    //         </div>
    //       </div>,
    //       {
    //         position: "bottom-right",
    //         heading: "Gracias!",
    //         onClick: () => {
    //           hide();
    //           // window.location = "/";
    //         }
    //       }
    //     );
    //     this.setState({
    //       estatura: "",
    //       peso: "",
    //       edad: "",
    //       imc: "",
    //       lateralidad: "",
    //       ejercita: "",
    //       sangre: "",
    //       genero: ""
    //     });
    //     // this.props.history.push('https://statistik-a.herokuapp.com/api/Stats')
    //     // window.location = "/Stats";
    //   })
    //   .catch(err => {
    //     const { hide } = cogoToast.error(
    //       <div style={{ color: "rgba(63,10,88,1)" }}>
    //         <b>Espera!</b>
    //         <div>Hacen falta campos por llenar</div>
    //       </div>,
    //       {
    //         position: "bottom-right",
    //         hideAfter: 3,
    //         onClick: () => {
    //           hide();
    //           // window.location = "/";
    //         }
    //       }
    //     );
    //   });
  };

  calculaIMC = (peso, estatura) => {
    let indiceMC = ((peso * 0.453592) / estatura ** 2).toFixed(2);
    this.setState({ imc: indiceMC });
    return indiceMC;
  };
  componentDidUpdate() {
    this.renderIMC();
  }
  renderIMCs = item => {
    return item < 18.5 ? (
      <div>
        <p className="imc-min">{item}</p>
        <Badge color="primary">Tu peso es inferior al normal</Badge>
      </div>
    ) : item < 24.9 ? (
      <div>
        <p className="imc-normal">{item}</p>
        <Badge color="success">Tu peso es normal</Badge>
      </div>
    ) : item < 29.9 ? (
      <div>
        <p className="imc-hi">{item}</p>
        <Badge color="warning">Tu peso es superior al normal</Badge>
      </div>
    ) : (
      <div>
        <p className="imc-ob">{item}</p>
        <Badge color="danger">Tu peso es muy superior al normal</Badge>
      </div>
    );
  };
  renderIMC = () => {
    if (this.state.estatura && this.state.peso && this.state.edad !== "") {
      return (
        <div className="col-12 mr-auto ml-auto">
          <Label style={labelSty} for="exampleName">
            Indice de Masa Corporal:
          </Label>
          <div
            style={{
              fontFamily: "Montserrat-ExtraBold"
            }}
          >
            Tu indice de masa corporal es:
          </div>
          <div className="align-content-center">
            {this.renderIMCs(this.state.imc)}
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="col-12 mr-auto ml-auto"
        style={{
          fontFamily: "Montserrat-ExtraBoldItalic",
          fontSize: "0.85em",
          marginTop: "15px",
          marginBottom: "35px"
        }}
      >
        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Estatura
              <div className="subbt">(en metros)</div>
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="estatura"
              id="exampleSelect"
            >
              <option defaultValue="selected">
                {"Elija la estatura en metros"}
              </option>
              {this.renderEstatura()}
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty} for="exampleName">
              Peso
              <div className="subbt">(en libras)</div>
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="peso"
              id="exampleSelect"
            >
              <option defaultValue="selected">
                {"Elija el peso en libras"}
              </option>
              {this.renderPeso()}
            </Input>
          </FormGroup>
        </div>
        {this.renderIMC()}
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
              <option defaultValue="selected">{""}</option>
              <option>Femenino</option>
              <option>Masculino</option>
              <option>Otro</option>
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <FormGroup className="col-12">
            <Label style={labelSty}>Grupo Sanguineo</Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="sangre"
              id="exampleSelect"
            >
              <option defaultValue="selected">{""}</option>
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
              <div className="subbt">(izquierda, derecha, ambidiestra)</div>
            </Label>
            <Input
              onChange={event => this.inputChange(event)}
              type="select"
              style={inputSty}
              name="lateralidad"
              id="exampleSelect"
            >
              <option defaultValue="selected">{""}</option>
              <option>Derecho</option>
              <option>Izquierdo</option>
              <option>Ambidestro</option>
            </Input>
          </FormGroup>
        </div>

        <div className="col-12 mr-auto ml-auto">
          <Label style={labelSty} for="exampleName">
            Practica deportes
            <div className="subbt">al menos 3 dias a la semana</div>
          </Label>
          <div className="mr-auto ml-auto">
            <FormGroup check>
              <Label
                check
                style={{
                  color: "gray",
                  fontSize: "1.15em",
                  fontWeight: "500",
                  lineHeight: "1",
                  textTransform: "uppercase",
                  letterSpacing: ".2em"
                }}
              >
                <Input
                  onChange={event => this.inputChange(event)}
                  type="select"
                  style={inputSty}
                  name="ejercita"
                  id="exampleSelect"
                >
                  <option defaultValue="selected">{""}</option>
                  <option>Si</option>
                  <option>No</option>
                </Input>
              </Label>
            </FormGroup>
          </div>
        </div>
        <Button
          style={{ marginTop: "1.5em", backgroundColor: "rgba(71,15,244,1)" }}
          className={this.state.activeThumb ? "jello-horizontal" : "none"}
          onClick={this.sendData}
        >
          Enviar
        </Button>
      </div>
    );
  }
}

export default SurveyComponent;
