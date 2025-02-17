const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

/// 1) MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('hello from middleware');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

///// 2)

/// 3) ROUTES





// 4) START SERVER
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
