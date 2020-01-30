const express = require('express');
const app = express();

const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const port = process.env.PORT || 5000;
const router = require('./routes/index');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/shopping', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})

// app.use(session({
//   store: new MongoStore({ mongooseConnection: connection }),
//   cookie: { maxAge: 180 * 60 * 1000 }
// }))
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use('/api', router);

// console.log that your server is up and running
app.listen(port, error => {
  if (error) {
    return console.log('something bad happened', error);
  }
  console.log(`Listening on port ${port}`);
});

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

module.exports = app;
