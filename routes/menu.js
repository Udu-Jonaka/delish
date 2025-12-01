import express from 'express';
import Menu from '../models/Menu.js';

const router = express.Router();

// GET Menu Page
router.get('/menu', async (req, res) => {
    try {
        const items = await Menu.find({});
        res.render('menu', { items });
    } catch (err) {
        console.error('Error loading menu:', err);
        res.status(500).send('Server Error');
    }
});

export default router;
