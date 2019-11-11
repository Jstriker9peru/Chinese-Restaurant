const mealInfo = [
    {
        category: 'appetizers',
        meals: [
            {
                id: 1,
                name: 'chicken egg rolls',
                imageURL: '/chicken-egg-rolls.jpg',
                price: 0.99
            },
            {
                id: 2,
                name: 'chinese donuts',
                imageURL: '/chinese-donuts.jpg',
                price: 3.50
            },
            {
                id: 3,
                name: 'crabmeat rangoon',
                imageURL: '/crabmeat-rangoon.jpg',
                price: 4.99
            },
            {
                id: 4,
                name: 'fried dumplings',
                imageURL: '/fried-dumplings.jpg',
                price: 3.99
            },
            {
                id: 5,
                name: 'fried wonton',
                imageURL: '/fried-wonton.jpg',
                price: 3.99
            },
            {
                id: 6,
                name: 'teriyaki chicken',
                imageURL: '/teriyaki-chicken.jpg',
                price: 4.99
            }
        ]
    },
    {
        category: 'entrees',
        meals: [
            {
                id: 7,
                name: 'beef fried rice',
                imageURL: '/beef-fried-rice.jpg',
                price: 6.99
            },
            {
                id: 8,
                name: 'beef with broccoli',
                imageURL: '/beef-with-broccoli.jpg',
                price: 6.99
            },
            {
                id: 9,
                name: 'chicken chow mein',
                imageURL: '/chicken-chow-mein.jpg',
                price: 5.99
            },
            {
                id: 10,
                name: 'chicken fried rice',
                imageURL: '/chicken-fried-rice.jpg',
                price: 5.99
            },
            {
                id: 11,
                name: 'chicken with broccoli',
                imageURL: '/chicken-with-broccoli.jpg',
                price: 5.99
            },
            {
                id: 12,
                name: 'chicken with vegetables',
                imageURL: '/chicken-with-mixed-vegetables.jpg',
                price: 5.99
            },
            {
                id: 13,
                name: 'chicken lo mein',
                imageURL: '/chicken-lo-mein.jpg',
                price: 6.99
            },
            {
                id: 14,
                name: 'kung pao chicken',
                imageURL: '/kung-pao-chicken.jpg',
                price: 5.99
            },
            {
                id: 15,
                name: 'mongolian beef',
                imageURL: '/mongolian-beef.jpg',
                price: 6.99
            },
            {
                id: 16,
                name: 'orange chicken',
                imageURL: '/orange-chicken.jpg',
                price: 8.99
            },
            {
                id: 17,
                name: 'sesame chicken',
                imageURL: '/sesame-chicken.jpg',
                price: 5.99
            },
            {
                id: 18,
                name: 'shrimp fried rice',
                imageURL: '/shrimp-fried-rice.jpg',
                price: 6.99
            },
            {
                id: 19,
                name: 'sweet & sour pork',
                imageURL: '/sweet-sour-pork.jpg',
                price: 6.99
            }
        ]
    },
    {
        category: 'sides',
        meals: [
            {
                id: 20,
                name: 'broccoli',
                imageURL: '/broccoli.jpg',
                price: 1.99
            },
            {
                id: 21,
                name: 'fried rice',
                imageURL: '/fried-rice.jpg',
                price: 1.99
            },
            {
                id: 22,
                name: 'white rice',
                imageURL: '/white-rice.jpg',
                price: 1.99
            },
            {
                id: 23,
                name: 'wonton soup',
                imageURL: '/wonton-soup.jpg',
                price: 1.99
            }
        ]
    },
    {
        category: 'desserts',
        meals: [
            {
                id: 24,
                name: 'brownie',
                imageURL: '/brownie.jpg',
                price: 1.50
            },
            {
                id: 25,
                name: 'chocolate chip cookie',
                imageURL: '/chocolate-chip-cookie.jpg',
                price: 0.99
            },
            {
                id: 26,
                name: 'fortune cookie',
                imageURL: '/fortune-cookie.jpg',
                price: 0.50
            }
        ]
    }
];

const allMeals = [
    {
        id: 1,
        name: 'chicken egg rolls',
        imageURL: '/chicken-egg-rolls.jpg',
        price: 0.99
    },
    {
        id: 2,
        name: 'chinese donuts',
        imageURL: '/chinese-donuts.jpg',
        price: 3.50
    },
    {
        id: 3,
        name: 'crabmeat rangoon',
        imageURL: '/crabmeat-rangoon.jpg',
        price: 4.99
    },
    {
        id: 4,
        name: 'fried dumplings',
        imageURL: '/fried-dumplings.jpg',
        price: 3.99
    },
    {
        id: 5,
        name: 'fried wonton',
        imageURL: '/fried-wonton.jpg',
        price: 3.99
    },
    {
        id: 6,
        name: 'teriyaki chicken',
        imageURL: '/teriyaki-chicken.jpg',
        price: 4.99
    },
    {
        id: 7,
        name: 'beef fried rice',
        imageURL: '/beef-fried-rice.jpg',
        price: 6.99
    },
    {
        id: 8,
        name: 'beef with broccoli',
        imageURL: '/beef-with-broccoli.jpg',
        price: 6.99
    },
    {
        id: 9,
        name: 'chicken chow mein',
        imageURL: '/chicken-chow-mein.jpg',
        price: 5.99
    },
    {
        id: 10,
        name: 'chicken fried rice',
        imageURL: '/chicken-fried-rice.jpg',
        price: 5.99
    },
    {
        id: 11,
        name: 'chicken with broccoli',
        imageURL: '/chicken-with-broccoli.jpg',
        price: 5.99
    },
    {
        id: 12,
        name: 'chicken with vegetables',
        imageURL: '/chicken-with-mixed-vegetables.jpg',
        price: 5.99
    },
    {
        id: 13,
        name: 'chicken lo mein',
        imageURL: '/chicken-lo-mein.jpg',
        price: 6.99
    },
    {
        id: 14,
        name: 'kung pao chicken',
        imageURL: '/kung-pao-chicken.jpg',
        price: 5.99
    },
    {
        id: 15,
        name: 'mongolian beef',
        imageURL: '/mongolian-beef.jpg',
        price: 6.99
    },
    {
        id: 16,
        name: 'orange chicken',
        imageURL: '/orange-chicken.jpg',
        price: 8.99
    },
    {
        id: 17,
        name: 'sesame chicken',
        imageURL: '/sesame-chicken.jpg',
        price: 5.99
    },
    {
        id: 18,
        name: 'shrimp fried rice',
        imageURL: '/shrimp-fried-rice.jpg',
        price: 6.99
    },
    {
        id: 19,
        name: 'sweet & sour pork',
        imageURL: '/sweet-sour-pork.jpg',
        price: 6.99
    },
    {
        id: 20,
        name: 'broccoli',
        imageURL: '/broccoli.jpg',
        price: 1.99
    },
    {
        id: 21,
        name: 'fried rice',
        imageURL: '/fried-rice.jpg',
        price: 1.99
    },
    {
        id: 22,
        name: 'white rice',
        imageURL: '/white-rice.jpg',
        price: 1.99
    },
    {
        id: 23,
        name: 'wonton soup',
        imageURL: '/wonton-soup.jpg',
        price: 1.99
    },
    {
        id: 24,
        name: 'brownie',
        imageURL: '/brownie.jpg',
        price: 1.50
    },
    {
        id: 25,
        name: 'chocolate chip cookie',
        imageURL: '/chocolate-chip-cookie.jpg',
        price: 0.99
    },
    {
        id: 26,
        name: 'fortune cookie',
        imageURL: '/fortune-cookie.jpg',
        price: 0.50
    }

]

const categories = [
    {
        id: 1,
        name: 'appetizers',
        imageURL: '/teriyaki-chicken.jpg',
        classes: 'category-1'
    },
    {
        id: 2,
        name: 'entrees',
        imageURL: '/kung-pao-chicken.jpg',
        classes: 'category-2'
    },
    {
        id: 3,
        name: 'sides',
        imageURL: '/wonton-soup.jpg',
        classes: 'category-3'
    },
    {
        id: 4,
        name: 'desserts',
        imageURL: '/chocolate-chip-cookie.jpg',
        classes: 'category-4'
    }
]

export { mealInfo, allMeals, categories };