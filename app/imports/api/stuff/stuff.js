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
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'Chocolate Chip Cookies',
    },
  },
  ingredients: {
    label: 'Ingredients',
    type: String,
    optional: false,
    max: 1000,
    autoform: {
      type: 'textarea',
      group: 'Stuff',
      placeholder: '1 cup butter, softened\n' +
        '1 cup white sugar\n' +
        '1 cup packed brown sugar\n' +
        '2 eggs\n' +
        '2 teaspoons vanilla extract\n' +
        '1 teaspoon baking soda\n' +
        ' \n' +
        '2 teaspoons hot water\n' +
        '1/2 teaspoon salt\n' +
        '3 cups all-purpose flour\n' +
        '2 cups semisweet chocolate chips\n' +
        '1 cup chopped walnuts',
    },
  },
  directions: {
    label: 'Directions',
    type: String,
    optional: false,
    max: 1000,
    autoform: {
      type: 'textarea',
      group: 'Stuff',
      placeholder: 'Preheat oven to 350 degrees F (175 degrees C).\n' +
        'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.\n' +
        'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned',
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
      options: function () { return [{ label: 'Breakfast', value: 'Breakfast' }, { label: 'Lunch', value: 'Lunch' }, { label: 'Dinner', value: 'Dinner' }, { label: 'Dessert', value: 'Dessert' }, { label: 'Appetizers', value: 'Appetizers' }, { label: 'Drinks', value: 'Drinks' }]; },

    },
  },

});

Stuff.attachSchema(StuffSchema);
console.log('hello');
