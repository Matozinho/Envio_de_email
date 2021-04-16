const express = require("express");
const cors = require("cors");
const { sendMail } = require("./sendEmail.js");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

app.get("/sendEmail", (req, res) => {
  const { name, phone } = req.query;

  sendMail(name, phone)
    .then((status) => {
      res.sendStatus(status);
    })
    .catch((status) => {
      res.sendStatus(status);
    });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Started server at http://localhost:3000!`)
);
