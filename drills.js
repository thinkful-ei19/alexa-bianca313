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

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .where({'cuisine': 'Italian',})
//   .whereIn('address_zipcode', ['10012', '10013', '10014'])
//   .orderBy('name', 'asc')
//   .limit(5)
//   .debug(true)
//   .then(results => console.log(results));

// knex('restaurants').insert({
//   name: 'Byte Cafe',
//   borough: 'Brooklyn',
//   cuisine: 'coffee',
//   address_building_number: '123',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231'
// })
//   .debug(true)
//   .then(results => console.log(results));

// knex('restaurants')
//   .where('name', 'Byte Cafe')
//   .debug(true)
//   .then(results => console.log(results));

knex('restaurants')
  .returning(['id', 'name'])
  .insert({
    name: 'Chipotle',
    borough: 'Queens',
    cuisine: 'Mexican',
    address_building_number: '999',
    address_street: 'Palmer St',
    address_zipcode: '11357'
  })
  .debug(true)
  .then(results => console.log(results));
  
