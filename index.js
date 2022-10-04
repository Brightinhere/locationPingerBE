const express = require("express");
const app = express()
const PORT = process.env.PORT || 80
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

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

  const fres = await db.collection('cities').add({
    location: req.body.location,
    user: req.body.user
  });

  res.status(200).send({
    id: fres.id
  })

    console.log(req.body);
})
