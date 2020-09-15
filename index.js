const express = require('express');
const morgan = require('morgan');
const playstore = require('./playstore/playstore');

const app = express();
app.use(morgan('dev'));

app.get('/apps', (req, res) => {
  const { sort, genres } = req.query;
  res.json(playstore);
});

app.listen(8000, () => {
  console.log('Server going...');
});
