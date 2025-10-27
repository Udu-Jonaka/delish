const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5100;

app.use(bodyParser.urlencoded({ extended: true }));

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

// Post requests
app.post("/contact", function (req, res) {
  const { email, phone, review } = req.body;

  console.log("New Review Submitted:");
  console.log("Email:", email);
  console.log("Phone:", phone || "Not provided");
  console.log("Review:", review);

  res.redirect('/contact');
});

// Start server
app.listen(PORT, function() {
  console.log(`Server running at http://localhost:${PORT}`);
});