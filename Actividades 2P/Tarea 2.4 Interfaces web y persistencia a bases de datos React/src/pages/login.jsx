import { useState } from "react";
import { useAuth } from "../modules/AuthProvider";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userService } from "../modules/user-service";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const { register, handleSubmit } = useForm();

  async function onSubmit(e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let idSession = "";
    if (validate()) {
      const querySnapshot = await userService.userCollection();
      querySnapshot.forEach((doc) => {
        const user = doc.data();
        if (user.email === email && user.password === password) {
          idSession = user.idSession;
          return idSession;
        }
      });
    }
    if (sessionStorage.getItem("idSession") !== "") {
      sessionStorage.clear();
      console.log(sessionStorage.getItem("idSession"));
      login(idSession);
      auth.saveUser(sessionStorage.getItem("idSession"));
    } else {
      if (idSession !== "") {
        login(idSession);
        auth.saveUser(sessionStorage.getItem("idSession"));
      } else {
        alert("Datos incorrectos intente nuevamente");
      }
    }
  }
  const login = (idSession) => {
    sessionStorage.setItem("idSession", idSession);
    alert("inicio de sesion correcto");
    let x = sessionStorage.getItem("idSession");
    console.log("exito " + x);
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    email.value = "";
    password.value = "";
  };
  window.onload = () => {
    const hiddenPassword = document.getElementById("hidden_password");
    hiddenPassword.addEventListener("change", (event) => {
      const password = document.getElementById("password");
      event.preventDefault();
      if (hiddenPassword.checked) {
        password.type = "text";
      } else {
        password.type = "password";
      }
    });
  };
  const validate = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (email.value.length === 0) {
      alert("Debe rellenar todos los campos");
      return;
    }
    if (password.value.length === 0) {
      alert("Debe rellenar todos los campos");
      return;
    }
    return true;
  };
  if (auth.isAuthenticated) {
    return <Navigate to={"/home"} />;
  }
  return (
    <div className="login__container">
      <h1 className="login__title">Iniciar Sesion</h1>
      <form
        className="login__formulario"
        id="login__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="formulario__group">
          <input
            type="email"
            id="email"
            name="email"
            className="formulario__input"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="formulario__label">
            Escriba su correo electronico
          </label>
        </div>
        <div className="formulario__group">
          <input
            type="password"
            id="password"
            name="password"
            className="formulario__input"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="formulario__label">
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
          value="Entrar"
        />
      </form>
    </div>
  );
}
