import express from 'express';
import Cart from '../models/Cart.js';
import Menu from '../models/menu.js';

const router = express.Router();

// Helper: get or create cart
async function getCart() {
    let cart = await Cart.findOne({});
    if (!cart) {
        cart = new Cart({ items: [] });
        await cart.save();
    }
    return cart;
}

// Add item to cart
router.post('/add-to-cart', async (req, res) => {
    const { itemId } = req.body;

    try {
        const cart = await getCart();
        const existingItem = cart.items.find(i => i.item.toString() === itemId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({ item: itemId, quantity: 1 });
        }

        await cart.save();
        res.redirect('/cart');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Increase quantity
router.post('/cart/increase', async (req, res) => {
    const { itemId } = req.body;
    const cart = await getCart();
    const cartItem = cart.items.find(i => i.item.toString() === itemId);
    if (cartItem) {
        cartItem.quantity += 1;
        await cart.save();
    }
    res.redirect('/cart');
});

// Decrease quantity
router.post('/cart/decrease', async (req, res) => {
    const { itemId } = req.body;
    const cart = await getCart();
    const cartItem = cart.items.find(i => i.item.toString() === itemId);
    if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
            cart.items = cart.items.filter(i => i.item.toString() !== itemId);
        }
        await cart.save();
    }
    res.redirect('/cart');
});

// Remove item
router.post('/cart/remove', async (req, res) => {
    const { itemId } = req.body;
    const cart = await getCart();
    cart.items = cart.items.filter(i => i.item.toString() !== itemId);
    await cart.save();
    res.redirect('/cart');
});

// Display cart
router.get('/cart', async (req, res) => {
    try {
        const cart = await getCart();
        await cart.populate('items.item');
        res.render('cart', { cart });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

export default router;
