import React from "react";
import Car from "./Car";
import "./parking.css";
import parImd from "./assets/parking.jpg";

function Parking() {
  const cars = [
    { id: 1, brand: "Ford", model: "Focus", owner: "Alicia" },
    { id: 2, brand: "BMW", model: "X3", owner: "Jhon" },
    { id: 3, brand: "Audi", model: "A4", owner: "Charlie" },
  ];
  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="title">
            Estacionamiento Universidad de las Fuerzas Armadas- ESPE
          </h1>
          <img src={parImd} alt="imagen_fondo" />
        </div>
        <div className="section">
          <ul>
            {cars.map((car) => (
              <Car
                key={car.id}
                brand={car.brand}
                model={car.model}
                owner={car.owner}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Parking;
