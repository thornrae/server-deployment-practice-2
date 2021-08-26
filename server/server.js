'use strict';

const express = require('express');
const app = express();


const stamper = require('./middleware/stamper.js');
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js')

app.get('/', stamper, (req,res) => {
  res.status(200).send('sup world');
})

app.get('/data', stamper, (req, res) => {
  let outputObject = {
    10: "even",
    5: "odd",
    "time": req.timestamp
  }
  res.status(200).json(outputObject);
});

app.get('/bad', (req, res, next) => {
  next('oopsies wrong')
});

app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}

module.exports = {
  app: app, 
  start: start
}