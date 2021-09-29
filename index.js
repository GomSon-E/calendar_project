const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { Event } = require("./models/Event");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "web_index.html"));
});

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});

process.on("uncaughtException", function (err) {
  console.log(err);
});

app.get("/", (req, res) => res.send("Hello World"));

// 예시
app.get('/api/hello', (req, res) => {
  res.send('안녕하세요')
})

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
