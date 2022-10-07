import express from 'express';
const app = express();
const PORT = process.env.PORT || 8081
import saveLocation from './db.js'
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

app.post('/ping', async (req, res) => {

  const call = await saveLocation(req.body.user, req.body.location)
  console.log(call)
  res.status(200).send({
    message: call
  })
})
