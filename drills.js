'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));


// Destroy the connection pool
// knex.destroy().then(() => {
//   console.log('database connection closed');
// });

// knex
//   .select()
//   .from('restaurants')
//   .debug(true)
//   .then(results => console.log(results));
// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .debug(true)
//   .then(results => console.log(results));
// knex 
//   .select('id','name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .debug(true)
//   .then(results => console.log(results));
// knex
//   .select()
//   .from('restaurants')
//   .where('cuisine', 'Thai')
//   .count()
//   .debug(true)
//   .then(results => console.log(results));
// knex
//   .select()
//   .from('restaurants')
//   .count()
//   .debug(true)
//   .then(results => console.log(results));
// knex
//   .select()
//   .from('restaurants')
//   .where({'cuisine': 'Thai','address_zipcode': '11372'})
//   .count()
//   .debug(true)
//   .then(results => console.log(results));
