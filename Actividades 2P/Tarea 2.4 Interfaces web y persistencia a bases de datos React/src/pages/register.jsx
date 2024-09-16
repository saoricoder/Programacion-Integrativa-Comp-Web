import { useState } from "react";
import { useAuth } from "../modules/AuthProvider";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userService } from "../modules/user-service";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const auth = useAuth();
  const { register, handleSubmit } = useForm();
  if (auth.isAuthenticated) {
    return <Navigate to={"/home"} />;
  }
  async function onSubmit(e) {
    addUser();
  }
  const addUser = async () => {
    const email = document.getElementById("email_register").value;
    const password = document.getElementById("password_register").value;
    const name = document.getElementById("nombre").value;
    let idSession = Math.floor(Math.random() * 90000 + 10000);
    try {
      if (validateDatos()) {
        const users = await userService.crearUser(
          email,
          idSession,
          password,
          name
        );
        alert("Datos guardados con exito");
        console.log("datos guardados con exito");
        window.location.href = "./";
      }
    } catch (error) {
      console.error();
    }
  };
  window.onload = () => {
    const hiddenPassword = document.getElementById("hidden_password");
    hiddenPassword.addEventListener("change", (event) => {
      const password = document.getElementById("password_register");
      event.preventDefault();
      if (hiddenPassword.checked) {
        password.type = "text";
      } else {
        password.type = "password";
      }
    });
    document.getElementById("email_register").value = " ";
  };
  const validateDatos = () => {
    const email = document.getElementById("email_register");
    const password = document.getElementById("password_register");
    const name = document.getElementById("nombre");
    if (email.value.length === 0) {
      alert("Debe rellenar todos los campos");
      return;
    }
    if (password.value.length === 0) {
      alert("Debe rellenar todos los campos");
      return;
    }
    if (name.value.length === 0) {
      alert("Debe rellenar todos los campos");
      return;
    }
    return true;
  };
  if (sessionStorage.getItem("idSession") !== null) {
    if (auth.isAuthenticated) {
      window.location.href = "/home";
    }
  }

  return (
    <div className="container">
      <div id="logout" className="menu__login">
        <a href="./" className="login__boton">
          Home
        </a>
      </div>
      <div className="login__container">
        <h1 className="login__title">Registrate</h1>
        <form
          className="login__formulario"
          id="register__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="formulario__group">
            <input
              type="text"
              id="nombre"
              name="name"
              className="formulario__input"
              placeholder=" "
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="nombre" className="formulario__label">
              Escriba su Nombre y Apellido
            </label>
          </div>
          <div className="formulario__group">
            <input
              type="email"
              id="email_register"
              name="email"
              className="formulario__input"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="email_register" className="formulario__label">
              Escriba su correo electronico
            </label>
          </div>
          <div className="formulario__group">
            <input
              type="password"
              id="password_register"
              name="password"
              className="formulario__input"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="password_register" className="formulario__label">
              Escriba su contraseña
            </label>
            <input
              className="formulario__hidden-password"
              type="checkbox"
              name="hidden_password"
              id="hidden_password"
            />
            <label
              className="formulario__label_hidden-password"
              htmlFor="hidden_password"
            ></label>
          </div>
          <input
            type="submit"
            id="boton"
            name="login__boton"
            className="formulario__btn"
            value="Registrar"
          />
        </form>
      </div>
    </div>
  );
}
