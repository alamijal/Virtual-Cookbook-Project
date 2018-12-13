/* eslint-disable meteor/no-session */
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Stuff } from '../../api/stuff/stuff.js';


Template.List_Searched_Stuff_Page_Name.helpers({
  /**
   * @returns documents with name matching searchValue
   */
  stuffSearch() {
    console.log(Session.get('searchValue'));
    console.log('^^^ That be the parameter');
    if (Session.get('searchValue')) {
      // If search parameter is defined, filter results
      const searchVal = Session.get('searchValue');
      const searchEXP = `.*${searchVal}.*`;
      return Stuff.find({ recipe: { $regex: searchEXP, $options: 'i' } });
    }
    // Otherwise, return all of the stuff
    return Stuff.find();
  },
});

Template.List_Searched_Stuff_Page_Ingredient.helpers({
  /**
   * @returns documents with name matching searchValue
   */
  stuffSearch() {
    console.log(Session.get('searchIngredientValue'));
    console.log('^^^ That be the parameter');
    if (Session.get('searchIngredientValue')) {
      // If search parameter is defined, filter results
      const searchVal = Session.get('searchIngredientValue');
      const searchEXP = `.*${searchVal}.*`;
      return Stuff.find({ ingredients: { $regex: searchEXP, $options: 'i' } });
    }
    // Otherwise, return all of the stuff
    return Stuff.find();
  },
});

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

