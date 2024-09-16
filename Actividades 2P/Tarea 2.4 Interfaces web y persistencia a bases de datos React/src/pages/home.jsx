import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "../css/home.css"

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  window.onload = () => {
    const logout = document.getElementById("logout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Sesión cerrada con éxito");
      sessionStorage.clear();
      window.location.href = "./";
    });
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      if (editingIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = task;
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="titulo">Bienvenido</h1>
      <div id="out" className="menu__login">
        <a id="logout" href="./" className="login__boton">
          Cerrar Sesion
        </a>
      </div>

      <div className="task-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={handleAddTask}>
          {editingIndex !== null ? "Actualizar Tarea" : "Agregar Tarea"}
        </button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleEditTask(index)}>Editar</button>
              <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
