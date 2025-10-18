const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server

app.listen(PORT, function() {
  console.log(`Server running at http://localhost:${PORT}`);
});