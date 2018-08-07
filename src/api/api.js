const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());

const todos = [];

app.get('/heartbeat', (req, res) => {
  res.status(200).json({ message: 'ok' });
});

app.get('/api/todos', (req, res) => {
  res.status(200).json({ data: todos });
});

app.get('/api/todos/:todo', (req, res) => {
  res.status(200).json({ id: 1, name: 'clean up', status: 'open' });
});

app.post('/api/todos', (req, res) => {
  todos.push(req.body);
  res.status(200).json(todos);
});

module.exports.server = serverless(app);
