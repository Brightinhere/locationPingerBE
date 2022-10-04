const express = require("express");
const app = express()
const PORT = 8081;

app.use(express.json())
app.listen(
  PORT,
  () => console.log(`Its alive on http://localhost:${PORT}`)
);


app.get('/pong', (req, res) => {
  res.status(200).send({
    location: "Locatie"
  })
})

app.post('/ping', (req, res) => {
    console.log(req.body);
})
