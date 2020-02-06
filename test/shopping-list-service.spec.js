const ShoppingListService = require('../src/shopping-list-service');
const knex = require('knex');

describe(`Shopping list service object`, function() {
    let db;

    let testItems = [
        {
           item_id: 1,
           name: 'Ice cream',
           price: '3.00',
           date_added: new Date('2020-01-22T16:28:32.615Z'),
           checked: false,
           category: 'Main' 
        },
        {
            item_id: 2,
            name: 'Curry Sauce',
            price: '5.00',
            date_added: new Date('2020-01-22T16:28:32.615Z'),
            checked: true,
            category: 'Lunch'  
         },
         {
            item_id: 3,
            name: 'Kiwis',
            price: '4.00',
            date_added: new Date('2020-01-22T16:28:32.615Z'),
            checked: false,
            category: 'Snack'  
         },
    ];

    before(() => {
        db = knex({
            client: 'pg',
            connection: process.env.TEST_DB_URL
        })
    });

    before(() => db('shopping_list').truncate());

    afterEach(() => db('shopping_list').truncate());

    after(() => db.destroy());

    context(`'shopping_list' table has data`, () => {

        beforeEach(() => {
            return db
                .into('shopping_list')
                .insert(testItems)
        });

        it(`getAllListItems resolves all items from 'shopping_list' table`, () => {
            return ShoppingListService.getAllListItems(db)
                .then(actual => {
                    expect(actual).to.eql(testItems)
                });
        });

        it(`getById() resolves an item by id from 'shopping_list' table`, () => {
            const itemId = 2;
            const testItem = testItems[itemId - 1];
            return ShoppingListService.getById(db, itemId)
                .then(actual => {
                    expect(actual).to.eql({
                        item_id: itemId,
                        name: testItem.name, 
                        price: testItem.price,
                        date_added: testItem.date_added,
                        checked: testItem.checked,
                        category: testItem.category
                    });
                });
        });

        it(`deleteItem() removes an item by id from 'shopping_list' table`, () => {
            const itemId = 2;
            return ShoppingListService.deleteItem(db, itemId)
                .then(() => ShoppingListService.getAllListItems(db))
                .then(allItems => {
                    const expected = testItems.filter(item => item.item_id !== itemId)
                    expect(allItems).to.eql(expected)
                });
        });

        it(`updateItem() updates an item checked or not in 'shopping_list' table`, () => {
            const idOfItemToUpdate = 1;
            const newItemData = {
                checked: true,
                name: 'Ice cream',
                price: '3.00',
                date_added: new Date('2020-01-22T16:28:32.615Z'),
                category: 'Main' 
            };

            return ShoppingListService.updateItem(db, idOfItemToUpdate, newItemData)
                .then(() => ShoppingListService.getById(db, idOfItemToUpdate))
                .then(item => {
                    expect(item).to.eql({
                        item_id: idOfItemToUpdate,
                        ...newItemData
                    })
                });
        });

        
    });

    context(`'shopping_list' has no data`, () => {
        it(`getAllListItems() resolves an empty array`, () => {
            return ShoppingListService.getAllListItems(db)
                .then(actual => {
                    expect(actual).to.eql([])
                });
        });

        it(`insertItem() inserts a new item and resolves the item by 'id'`, () => {
            const newItem = {
                name: 'New Item',
                price: '1.00',
                date_added: new Date('2020-01-22T16:28:32.615Z'),
                checked: false,
                category: 'Snack'  
            };

            return ShoppingListService.insertItem(db, newItem)
                .then(actual => {
                    expect(actual).to.eql({
                        item_id: 1,
                        name: newItem.name,
                        price: newItem.price,
                        date_added: newItem.date_added,
                        checked: newItem.checked,
                        category: newItem.category
                    });
                });
        });
    });
});