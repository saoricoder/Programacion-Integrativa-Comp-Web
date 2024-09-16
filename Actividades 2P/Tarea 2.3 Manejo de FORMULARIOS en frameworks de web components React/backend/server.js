const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000; // Puerto en el que el servidor backend estará escuchando

app.use(express.json()); // Para manejar JSON en el cuerpo de las solicitudes

// Ruta para obtener los participantes
app.get('/api/participantes', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error al leer los datos.');
    }
    res.json(JSON.parse(data));
  });
});

// Ruta para agregar un nuevo participante
app.post('/api/participantes', (req, res) => {
  const { nombre, correo, edad } = req.body;

  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error al leer los datos.');
    }

    const participantes = JSON.parse(data);
    participantes.push({ nombre, correo, edad });

    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(participantes, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error al guardar los datos.');
      }
      res.status(201).json({ nombre, correo, edad });
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});


