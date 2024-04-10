const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cron = require('node-cron');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// DB connection
const connection = mysql.createConnection({
  host: 'mydbinstance.cion4q2xaw75.us-east-2.rds.amazonaws.com',
  user: 'root',
  password: 'aD?wvX;&6#*q',
  database: 'developer',
  port: 3306,
})

connection.connect((err) => {
  if (err) {
    console.log(err.message);
  }
});

// API Endpionts
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, result) => {
    if (err) {
      return res.json({
        message: err.message,
      });
    }

    res.json(result);
  })
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  connection.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.json({
        message: err.message,
      });
    }
    res.json(result[0] || {});
  });
});

app.post('/users', (req, res) => {
  const { username, email } = req.body;
  connection.query('INSERT INTO users (username, email, created_at) VALUES (?, ?, ?)', [username, email, new Date()], (err, result) => {
    if (err) {
      return res.json({
        message: err.message,
      });
    }

    res.status(201).json({ id: result.insertId, username, email });
  });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  connection.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id], (err) => {
    if (err) {
      return res.json({
        message: err.message,
      });
    }

    res.json({ message: 'User updated successfully.' });
  });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) {
      return res.json({
        message: err.message,
      });
    }

    res.json({ message: 'User deleted successfully.' });
  });
});

//once a day midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running maintence task at midnight.');

  reportNewUsers();
});

function reportNewUsers() {
  connection.query('SELECT * FROM users WHERE created_at >= NOW() - INTERVAL 1 DAY', (err, result) => {
    if (err) {
      return console.log(err.message);
    };

    console.log(`${result.length} user(s) created. (${result.map(_item => _item.username).join(', ')})`)
  })
}

// start the webserver
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});