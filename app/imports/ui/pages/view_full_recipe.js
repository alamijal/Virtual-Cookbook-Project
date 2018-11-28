import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.View_Full_Recipe.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
