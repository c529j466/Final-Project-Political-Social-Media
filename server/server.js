require('dotenv').config()
const { MongoClient } = require('mongodb')
var mongoose = require('mongoose');
const path = require('path');
const express = require("express");
const db = require('./config/connection');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

const app = express();
const cors = require('cors');
const { start } = require('repl');
app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var nameSchema = new mongoose.Schema({
  userName: String,
  password: String
});
var User = mongoose.model("User", nameSchema);
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

app.post('/register', (req, res) => { //Line 9
  console.log('we hit register');
  var newUser = new User(req.body);
  newUser.save()
    .then(item => {
      res.send('Registration successful')
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});