const express = require('express');
const path = require('path');

const app = express();
const PORT = 5100;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/menu', function(req, res) {
  res.render('menu');
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

// Start server
app.listen(PORT, function() {
  console.log(`Server running at http://localhost:${PORT}`);
});