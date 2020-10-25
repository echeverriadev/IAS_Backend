const bodyParser = require('body-parser');
const RouteLoader = require('./routes');
const express = require('express');
require('../config/enviroments');

const cors = require('cors');

let app = express();

const port = process.env.NODE_PORT;
const front_port = process.env.REACT_PORT;

app.use(
  cors({
    origin: `${front_port}`,
    credentials: true,
  })
);

app.use(bodyParser.json());
app = RouteLoader.load(app);

app.get('/', (req, res) => {
  res.send('Our API is running here - IAS Test');
});

app.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${port}`);
});
