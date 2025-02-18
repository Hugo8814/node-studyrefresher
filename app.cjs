const express = require('express');

const morgan = require('morgan');
const app = express();
const tourRouter = require('./routes/tourRoutes.cjs');
const userRouter = require('./routes/userRoutes.cjs');
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
/////


/// 2) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);



// 3) START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
