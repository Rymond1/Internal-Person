const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// 🔥 Serve your website
app.use(express.static('public'));

let users = [];
let books = [];

// REGISTER
app.post('/register', (req, res) => {
  users.push(req.body);
  res.send({ message: 'User registered' });
});

// LOGIN
app.post('/login', (req, res) => {
  const user = users.find(u =>
    u.email === req.body.email && u.password === req.body.password
  );

  if(user){
    res.send({ success: true });
  } else {
    res.send({ success: false });
  }
});

// ADD BOOK
app.post('/add-book', (req, res) => {
  books.push(req.body);
  res.send({ message: 'Book added' });
});

// GET BOOKS
app.get('/books', (req, res) => {
  res.send(books);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));