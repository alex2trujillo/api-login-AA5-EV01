// Importamos express
const express = require("express");
const app = express();

// Permite recibir datos en formato JSON
app.use(express.json());

// Usuario simulado (como si fuera una base de datos)
let usuarioRegistrado = {
  usuario: "admin",
  password: "1234"
};

// Servicio de registro
app.post("/register", (req, res) => {
  const { usuario, password } = req.body;

  usuarioRegistrado = { usuario, password };

  res.json({
    mensaje: "Usuario registrado correctamente"
  });
});

// Servicio de login
app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  if (
    usuario === usuarioRegistrado.usuario &&
    password === usuarioRegistrado.password
  ) {
    res.json({
      mensaje: "Autenticación satisfactoria"
    });
  } else {
    res.status(401).json({
      error: "Error en la autenticación"
    });
  }
});

app.listen(3000, () => {
  console.log("API funcionando en http://localhost:3000");
});
