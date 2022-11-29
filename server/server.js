require('dotenv').config()
const { MongoClient } = require('mongodb')
const path = require('path');
const express = require("express");
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();
const cors = require('cors');
const { start } = require('repl');
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function Go() {

  const client = new MongoClient(' mongodb+srv://c529j466:$cJ0nes$@cluster0.s1rnsdv.mongodb.net/FinalProjectDB?retryWrites=true&w=majority')
  await client.connect()
  db = client.db()
  app.listen(3000)
};


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});