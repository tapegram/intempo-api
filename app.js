'use strict';
import hello from 'src/main';

const express = require('express');

const app = express();

// Routes
app.get('/*', (req, res) => {
  res.send(`Request was received: ${req.method} - ${req.path}, ${hello()}`);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;
