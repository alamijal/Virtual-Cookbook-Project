import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'John',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Doe',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: '1234 NE Elmo ST',
    },
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: '123-456-1234',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: 'Stuff',
      placeholder: 'john.doe@gmail.com',
    },
  },
});

Stuff.attachSchema(StuffSchema);
console.log("hello")
