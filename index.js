import express from 'express';
const app = express();
const PORT = process.env.PORT || 8081
import {saveLocation, saveUser} from './db.js'
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


app.post('/saveLocation', async (req, res) => {

  console.log(req.body.user)
  const call = await saveLocation(req.body.location, req.body.user)
  console.log(call)
  res.status(200).send({
    message: call
  })
})

// app.post('/register', async (req, res) => {
//
//   const call = await register(req.body.user)
//   res.status(200).send({
//     message: call
//   })
// })
//
//
// app.post('/login', async (req, res) => {
//
//   const call = await login(req.body.user)
//   res.status(200).send({
//     message: call
//   })
// })

