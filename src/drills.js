require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
});

function searchShoppingItemName(searchTerm) {
    knexInstance
        .select('name', 'price', 'date_added', 'checked', 'category')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(results => {
            console.log(results)
        })
};

// searchShoppingItemName('fish');

function paginateShoppingList(pageNumber) {
    const itemsPerPage = 6;
    const displayPage = itemsPerPage * (pageNumber - 1);

    knexInstance
        .select('*')
        .from('shopping_list')
        .limit(itemsPerPage)
        .offset(displayPage)
        .then(results => {
            console.log(results);
        })
};

// paginateShoppingList(2); //page 2 shows items 7-12

function itemsAddedAfterDate(daysAgo) {
    knexInstance
        .select('name', 'price', 'date_added', 'checked', 'category')
        .from('shopping_list')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
        )
        .then(results => {
            console.log(results);
        })
};

// itemsAddedAfterDate(7);

function getTotalCostPerCategory() {
    knexInstance
        .select('category')
        .sum('price AS total_price')
        .from('shopping_list')
        .groupBy('category')
        .then(results => {
            console.log(results);
        })
};

// getTotalCostPerCategory();
// results:
// [
//     { category: 'Lunch', total_price: '15.80' },
//     { category: 'Snack', total_price: '21.89' },
//     { category: 'Main', total_price: '76.37' },
//     { category: 'Breakfast', total_price: '20.63' }
// ]
  