import React from 'react';
import './Car.css';

  function Car(props) {
    return (
    <li>
      <strong> Marca: </strong> {props.brand},
      <strong> Modelo:</strong> {props.model},
      <strong> Propietario:</strong> {props.owner}
    </li>
    );
  }

export default Car;
