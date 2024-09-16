import LoginForm from "./pages/login";
import "./css/myreset.css";
import "./css/login.css";
import "./css/App.css";
function App() {
  return (
    <div className="container">
      <div id="logout" className="menu__login">
        <a href="./register" className="login__boton">
          Registrarse
        </a>
      </div>
      <LoginForm />
    </div>
  );
}

export default App;
