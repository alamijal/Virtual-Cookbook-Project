import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.List_Searched_Stuff_Page_Breakfast.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find({ cuisineType: 'Breakfast' });
  },
});
Template.List_Searched_Stuff_Page_Lunch.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find({ cuisineType: 'Lunch' });
  },
});
Template.List_Searched_Stuff_Page_Dinner.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find({ cuisineType: 'Dinner' });
  },
});
Template.List_Searched_Stuff_Page_Dessert.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find({ cuisineType: 'Dessert' });
  },
});
Template.List_Searched_Stuff_Page_Appetizers.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find({ cuisineType: 'Appetizers' });
  },
});
Template.List_Searched_Stuff_Page_Drinks.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find({ cuisineType: 'Drinks' });
  },
});

