import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import menuRoutes from './routes/menu.js';
import dotenv from "dotenv";
dotenv.config();


// connect to atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch(err => console.log(err));

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5100;

// Middleware
app.use(express.urlencoded({ extended: true }));  // replaces body-parser
app.use(express.static(path.join(__dirname, 'public')));


// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use(menuRoutes);
import cartRoutes from './routes/cart.js';

app.use(menuRoutes);
app.use(cartRoutes); // add after menuRoutes


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/cart', (req, res) => {
    res.render('cart');
});

// Post requests
app.post('/contact', (req, res) => {
    const { email, phone, review } = req.body;

    console.log('New Review Submitted:');
    console.log('Email:', email);
    console.log('Phone:', phone || 'Not provided');
    console.log('Review:', review);

    res.redirect('/contact');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
