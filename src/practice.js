require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
});

// const q1 = knexInstance.from('amazong_products')
//     .select('*').toQuery();

// const q2 = knexInstance('amazong_products').select('*').toQuery();

// console.log('q1:', q1);
// console.log('q2:', q2);

// knexInstance.from('amazong_products').select('*')
//     .then(result => {
//         console.log(result)
//     });
// .first() returns only the object first found and not the array
// const qry = knexInstance
//     .select('product_id', 'name', 'price', 'category')
//     .from('amazong_products')
//     .where({ name: 'Point of view gun' })
//     .first()
//     .toQuery()
//     // .then(result => {
//     //     console.log(result)
//     // })
// console.log(qry);

// function searchByProduceName(searchTerm) {
//    knexInstance
//     .select('product_id', 'name', 'price', 'category')
//     .from('amazong_products')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then(result => {
//         console.log(result)
//     }) 
// };

// searchByProduceName('cookie');

// function paginateProducts(page) {
//     const productsPerPage = 10;
//     const offset = productsPerPage * (page - 1);

//     knexInstance
//         .select('product_id', 'name', 'price', 'category')
//         .from('amazong_products')
//         .limit(productsPerPage)
//         .offset(offset)
//         .then(result => {
//             console.log(result)
//         })
// }

// paginateProducts(4);

// function getProductsWithImages() {
//     knexInstance
//         .select('product_id', 'name', 'price', 'category', 'image')
//         .from('amazong_products')
//         .whereNotNull('image')
//         .then(result => {
//             console.log(result)
//         })
// };

// getProductsWithImages();

// function mostPopularVideosForDays(days) {
//     knexInstance
//         .select('video_name', 'region')
//         .count('date_viewed AS views')
//         .where(
//             'date_viewed',
//             '>',
//             knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
//         )
//         .from('whopipe_video_views')
//         .groupBy('video_name', 'region')
//         .orderBy([
//             { column: 'region', order: 'ASC' },
//             { column: 'views', order: 'DESC' }
//         ])
//         .then(result => {
//             console.log(result)
//         })
// };

// mostPopularVideosForDays(30);