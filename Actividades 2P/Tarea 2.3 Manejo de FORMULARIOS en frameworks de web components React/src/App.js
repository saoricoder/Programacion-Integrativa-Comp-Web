import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Form, Input, Label, FormGroup, Button, FormFeedback } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      correo: '',
      edad: '',
      mensajeCorreo: '',
      mensajeEdad: '',
      mensajeNombre: '',
      invalidCorreo: false,
      invalidNombre: false,
      invalidEdad: false,
    };

    this.onChange = this.onChange.bind(this);
    this.enviarAlaBD = this.enviarAlaBD.bind(this);
  }

  onChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  enviarAlaBD(e) {
    e.preventDefault();
    let valido = true;

    if (this.state.nombre === '') {
      this.setState({
        invalidNombre: true,
        mensajeNombre: 'El campo nombre es obligatorio, indica tu nombre',
      });
      valido = false;
    }
    if (this.state.correo === '') {
      this.setState({
        invalidCorreo: true,
        mensajeCorreo: 'Indica tu dirección de correo',
      });
      valido = false;
    }
    if (this.state.edad === '') {
      this.setState({
        invalidEdad: true,
        mensajeEdad: 'Indica tu edad',
      });
      valido = false;
    }

    if (valido) {
      axios.post('http://localhost:5000/api/participantes', {
        nombre: this.state.nombre,
        correo: this.state.correo,
        edad: this.state.edad,
      })
      .then(res => {
        console.log('Datos guardados:', res.data);
        // Limpiar el formulario después de guardar los datos
        this.setState({
          nombre: '',
          correo: '',
          edad: '',
          mensajeCorreo: '',
          mensajeEdad: '',
          mensajeNombre: '',
          invalidCorreo: false,
          invalidNombre: false,
          invalidEdad: false,
        });
      })
      .catch(err => {
        console.error('Error al enviar datos:', err);
      });
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="3"></Col>
          <Col xs="6">
            <h2>Registro de Participantes</h2>
            <Form onSubmit={this.enviarAlaBD}>
              <FormGroup>
                <Label>Nombre</Label>
                <Input type="text" name="nombre" value={this.state.nombre} onChange={this.onChange} invalid={this.state.invalidNombre} />
                <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label>Correo</Label>
                <Input type="email" name="correo" value={this.state.correo} onChange={this.onChange} invalid={this.state.invalidCorreo} />
                <FormFeedback>{this.state.mensajeCorreo}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label>Edad</Label>
                <Input type="text" name="edad" value={this.state.edad} onChange={this.onChange} invalid={this.state.invalidEdad} />
                <FormFeedback>{this.state.mensajeEdad}</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Button color="success" type="submit">Guardar</Button>
              </FormGroup>

            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
