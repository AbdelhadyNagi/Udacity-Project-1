// Declare Express and instance it im the code
const express = require("express");
const app = express();

// Using body-parser and cors
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

// Connecting the folder we are working on
app.use(express.static("Landing Page (Abdelhady Nagi)"));

// Setup our Local Server
const port = 8000;
const server = app.listen(port, () =>
  console.log(`The Local Server is Running on Local host: ${port}`)
);
