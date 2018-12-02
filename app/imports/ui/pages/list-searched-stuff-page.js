import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';


Template.List_Searched_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find({ cuisineType: 'Lunch' });
  },
});

