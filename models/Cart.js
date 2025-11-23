import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true },
    quantity: { type: Number, default: 1 }
});

const cartSchema = new mongoose.Schema({
    items: [cartItemSchema]
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
