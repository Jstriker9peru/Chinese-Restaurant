const Category = require('../models/category');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping', { useNewUrlParser: true }, { useUnifiedTopology: true });

const categories = [
    {
        name: 'appetizers',
        imageURL: '/teriyaki-chicken.jpg',
        classes: 'category-1'
    },
    {
        name: 'entrees',
        imageURL: '/kung-pao-chicken.jpg',
        classes: 'category-2'
    },
    {
        name: 'sides',
        imageURL: '/wonton-soup.jpg',
        classes: 'category-3'
    },
    {
        name: 'desserts',
        imageURL: '/chocolate-chip-cookie.jpg',
        classes: 'category-4'
    }
]

Category.insertMany(categories, function(err, docs) {
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