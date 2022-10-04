const express = require("express");
const app = express()
const PORT = process.env.PORT || 80


app.use(express.json())
app.listen(
  PORT,
  () => console.log(`Its alive on https://locationpicker.herokuapp.com/:${PORT}`)
);


app.get('/pong', (req, res) => {
  res.status(200).send({
    location: "Locatie"
  })
})

app.post('/ping', (req, res) => {
    console.log(req.body);
})
