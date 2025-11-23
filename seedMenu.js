import mongoose from 'mongoose';
import Menu from './models/menu.js';

mongoose.connect('mongodb://localhost:27017/delishDB');

const menuItems = [
    { name: 'Pasta & Plantain', price: 2500, image: '/images/Pasta.png', description: 'Delicious pasta with fried plantain' },
    { name: 'Stir-Fry Pasta', price: 2200, image: '/images/stir-fry.png', description: 'Tasty stir-fried pasta' },
    { name: 'Stir-Fry Noodles', price: 2000, image: '/images/noodles.png', description: 'Delicious noodles with veggies' },
    { name: 'Pasta Combo', price: 3000, image: '/images/combo.png', description: 'Combo meal with pasta and sides' },
    { name: 'Chicken Curry', price: 2800, image: '/images/chicken-curry.png', description: 'Spicy chicken curry' },
    { name: 'Beef Curry', price: 3200, image: '/images/beef-curry.png', description: 'Savory beef curry' }
];

async function seedMenu() {
    try {
        await Menu.deleteMany({});
        await Menu.insertMany(menuItems);
        console.log('Menu seeded successfully!');
    } catch (err) {
        console.error('Error seeding menu:', err);
    } finally {
        mongoose.connection.close();
    }
}

seedMenu();
