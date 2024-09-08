const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDatabase = require('./Shared/database');

const router = require("./routes/apiRoutes");

app.use(express.json());
app.use('/api', router)

app.use(express.json());

connectToDatabase();

// Rutas
app.get('/', (req, res) => {
  res.send('Hello, World!');
});




// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});