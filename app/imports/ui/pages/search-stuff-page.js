/* eslint-env jquery */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';
import { AutoForm } from 'meteor/aldeed:autoform';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Stuff } from '../../api/stuff/stuff.js';


Template.Search_Stuff_Page.onCreated(function () {
  this.templateDictionary = new ReactiveDict();

  Meteor.subscribe('stuffSearch');
});


Template.Search_Stuff_Page.events({
  'submit .center.aligned.button.name': function (event, instance) {
    const params = { SearchValue: instance.templateDictionary.set('searchValue', $('#searchValue').val()) };
    Session.set('searchValue', $('#searchValue').val());
    FlowRouter.go('/nameresults/', params);
    // event.preventDefault();
  },

  'submit .center.aligned.button.ingredient': function (event, instance) {
    const params = { SearchValue: instance.templateDictionary.set('searchValue', $('#searchIngredientValue').val()) };
    Session.set('searchIngredientValue', $('#searchIngredientValue').val());
    FlowRouter.go('/ingredientresults/', params);
    // event.preventDefault();
  },
});


Template.Search_Stuff_Page.helpers({
  /**
   * @returns documents with name matching searchValue
   */
  stuffSearch() {
    const instance = Template.instance();
   // if (instance.templateDictionary.get('searchValue')) {
      // If search parameter is defined, filter results
    const searchVal = instance.templateDictionary.get('searchValue');
    const searchEXP = `.*${searchVal}.*`;
     // return Stuff.find({ recipe: { $regex: searchEXP, $options: 'i' } });
    // }
    // Otherwise, return all of the stuff
    return Stuff.find({ recipe: { $regex: searchEXP, $options: 'i' } });
  },
});




Template.Search_Ingredients_Page.onCreated(function () {
  this.templateDictionary = new ReactiveDict();
  Meteor.subscribe('stuffSearch');
});

Template.Search_Ingredients_Page.events({
  'submit .center.aligned.button': function (event, instance) {
    instance.templateDictionary.set('searchValue2', $('#searchValue2').val());
    event.preventDefault();
  },
});


// Template.Search_Ingredients_Page.helpers({
//   /**
//    * @returns documents with name matching searchValue
//    */
//   stuffSearch() {
//     const instance = Template.instance();
//     // if (instance.templateDictionary.get('searchValue')) {
//     // If search parameter is defined, filter results
//     const searchVal = instance.templateDictionary.get('searchValue2');
//     const searchEXP = `.*${searchVal}.*`;
//     // return Stuff.find({ recipe: { $regex: searchEXP, $options: 'i' } });
//     // }
//     // Otherwise, return all of the stuff
//     return Stuff.find({ ingredients: { $regex: searchEXP, $options: 'i' } });
//   },
// });

