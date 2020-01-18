const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping', { useNewUrlParser: true }, { useUnifiedTopology: true });

const products = [
    new Product({
        name: 'chicken egg rolls',
        imageURL: '/chicken-egg-rolls.jpg',
        category: 'appetizers', 
        price: 0.99
    }),
    new Product({
        name: 'chinese donuts',
        imageURL: '/chinese-donuts.jpg',
        category: 'appetizers',
        price: 3.50
    }),
    new Product({
        name: 'crabmeat rangoon',
        imageURL: '/crabmeat-rangoon.jpg',
        category: 'appetizers',
        price: 4.99
    }),
    new Product({
        name: 'fried dumplings',
        imageURL: '/fried-dumplings.jpg',
        category: 'appetizers',
        price: 3.99
    }),
    new Product({
        name: 'fried wonton',
        imageURL: '/fried-wonton.jpg',
        category: 'appetizers',
        price: 3.99
    }),
    new Product({
        name: 'teriyaki chicken',
        imageURL: '/teriyaki-chicken.jpg',
        category: 'appetizers',
        price: 4.99
    }),
    new Product({
        name: 'beef fried rice',
        imageURL: '/beef-fried-rice.jpg',
        category: 'entrees',
        price: 6.99
    }),
    new Product({
        name: 'beef with broccoli',
        imageURL: '/beef-with-broccoli.jpg',
        category: 'entrees',
        price: 6.99
    }),
    new Product({
        name: 'chicken chow mein',
        imageURL: '/chicken-chow-mein.jpg',
        category: 'entrees',
        price: 5.99
    }),
    new Product({
        name: 'chicken fried rice',
        imageURL: '/chicken-fried-rice.jpg',
        category: 'entrees',
        price: 5.99
    }),
    new Product({
        name: 'chicken with broccoli',
        imageURL: '/chicken-with-broccoli.jpg',
        category: 'entrees',
        price: 5.99
    }),
    new Product({
        name: 'chicken with vegetables',
        imageURL: '/chicken-with-mixed-vegetables.jpg',
        category: 'entrees',
        price: 5.99
    }),
    new Product({
        name: 'chicken lo mein',
        imageURL: '/chicken-lo-mein.jpg',
        category: 'entrees',
        price: 6.99
    }),
    new Product({
        name: 'kung pao chicken',
        imageURL: '/kung-pao-chicken.jpg',
        category: 'entrees',
        price: 5.99
    }),
    new Product({
        name: 'mongolian beef',
        imageURL: '/mongolian-beef.jpg',
        category: 'entrees',
        price: 6.99
    }),
    new Product({
        name: 'orange chicken',
        imageURL: '/orange-chicken.jpg',
        category: 'entrees',
        price: 8.99
    }),
    new Product({
        name: 'sesame chicken',
        imageURL: '/sesame-chicken.jpg',
        category: 'entrees',
        price: 5.99
    }),
    new Product({
        name: 'shrimp fried rice',
        imageURL: '/shrimp-fried-rice.jpg',
        category: 'entrees',
        price: 6.99
    }),
    new Product({
        name: 'sweet & sour pork',
        imageURL: '/sweet-sour-pork.jpg',
        category: 'entrees',
        price: 6.99
    }),
    new Product({
        name: 'broccoli',
        imageURL: '/broccoli.jpg',
        category: 'sides',
        price: 1.99
    }),
    new Product({
        name: 'fried rice',
        imageURL: '/fried-rice.jpg',
        category: 'sides',
        price: 1.99
    }),
    new Product({
        name: 'white rice',
        imageURL: '/white-rice.jpg',
        category: 'sides',
        price: 1.99
    }),
    new Product({
        name: 'wonton soup',
        imageURL: '/wonton-soup.jpg',
        category: 'sides',
        price: 1.99
    }),
    new Product({
        name: 'brownie',
        imageURL: '/brownie.jpg',
        category: 'desserts',
        price: 1.50
    }),
    new Product({
        name: 'chocolate chip cookie',
        imageURL: '/chocolate-chip-cookie.jpg',
        category: 'desserts',
        price: 0.99
    }),
    new Product({
        name: 'fortune cookie',
        imageURL: '/fortune-cookie.jpg',
        category: 'desserts',
        price: 0.50
    })
];

Product.insertMany(products, function(err, docs) {
    if (err) {
        console.log('Insert Error', err);
    } else {
        console.log('Successful Insert', docs);
        exit();
    }
})

function exit() {
    mongoose.disconnect();
}