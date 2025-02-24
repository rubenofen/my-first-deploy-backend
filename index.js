const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: ["http://localhost:5173", "https://nuclio.nimbel.net"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/health", (req, res) => {
  res.send("The service is on line");
});

app.listen(3000, () => {
  console.log("Server working on port 3000");
});
