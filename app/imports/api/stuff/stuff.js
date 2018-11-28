import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  recipe: {
    label: 'Recipe Title',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'John',
    },
  },
  ingredients: {
    label: 'Ingredients',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      type: 'textarea',
      group: 'Stuff',
      placeholder: 'Doe',
    },
  },
  directions: {
    label: 'Directions',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      type: 'textarea',
      group: 'Stuff',
      placeholder: '1234 NE Elmo ST',
    },
  },
  cuisineType: {
    label: 'Cuisine Type',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: '123-456-1234',
      type: 'select-radio-inline',
      options: function () { return [{ label: 'Breakfast', value: 'Breakfast' }, { label: 'Lunch', value: 'Lunch' }, { label: 'Dinner', value: 'Dinner' },{ label: 'Dessert', value: 'Dessert' } ]; },

    },
  },
});

Stuff.attachSchema(StuffSchema);
console.log('hello');
