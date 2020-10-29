const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Specify port
const PORT = 3001;

// User Routes

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../src/index.html'));
// });

app.use('/', apiRouter);
// app.post('/', apiRouter);
// app.use('/api', apiRouter);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
