import { _ } from 'meteor/underscore';
import { Stuff } from '../../api/stuff/stuff.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const stuffSeeds = [
  { first: 'Michael', last: 'Jackson', address: 'Los Angeles', phone: '234-233-4444', email: 'm.jackson@gmail.com' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds, function seedStuffs(stuff) {
    Stuff.insert(stuff);
  });
}
