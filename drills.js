'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(11)
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

// knex('restaurants')
//   .returning(['id', 'name'])
//   .insert({
//     name: 'Chipotle',
//     borough: 'Queens',
//     cuisine: 'Mexican',
//     address_building_number: '999',
//     address_street: 'Palmer St',
//     address_zipcode: '11357'
//   })
//   .debug(true)
//   .then(results => console.log(results));

// knex('restaurants')
//   .returning(['id', 'name'])
//   .insert([
//     {
//       name: 'Alexas',
//       borough: 'Queens',
//       cuisine: 'Chinese',
//       address_building_number: '345',
//       address_street: 'Sunny St',
//       address_zipcode: '11357'
//     }, {
//       name: 'Bianca',
//       borough: 'Manhattan',
//       cuisine: 'Indian',
//       address_building_number: '678',
//       address_street: 'Palmer St',
//       address_zipcode: '11357'

//     }, {
//       name: 'Alexa and Biancas',
//       borough: 'Brooklyn',
//       cuisine: 'Italian',
//       address_building_number: '111',
//       address_street: 'Hipster St',
//       address_zipcode: '11357'
//     }
//     ])
//     .debug(true)
//     .then(results => console.log(results));
// knex('restaurants')
//   .where('nyc_restaurant_id', '30191841')
//   .update({name: 'DJ Reynolds Pub and Restaurant'})
//   .debug(true)
//   .then(results => console.log(results));

// knex('restaurants')
// .select()
// .where('name', 'DJ Reynolds Pub and Restaurant')
// .debug(true)
// .then(results => console.log(results));

// knex
//   .select()
//   .from('grades')
//   //.where('id', 9)
//   //.del()
//   .debug(true)
//   .then(results => console.log(results));

// knex('restaurants')
//   .where('id', 22)
//   .del()
//   .debug(true)
//   .then(results => console.log(results));

