/* eslint-env jquery */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Search_Stuff_Page.onCreated(function () {
  this.templateDictionary = new ReactiveDict();
  Meteor.subscribe('stuffSearch');
});

Template.Search_Stuff_Page.events({
  'submit .center.aligned.button': function (event, instance) {
    instance.templateDictionary.set('searchValue', $('#searchValue').val());
    event.preventDefault();
  },
});


Template.Search_Stuff_Page.helpers({
  /**
   * @returns documents with name matching searchValue
   */
  stuffSearch() {
    const instance = Template.instance();
    if (instance.templateDictionary.get('searchValue')) {
      // If search parameter is defined, filter results
      const searchVal = instance.templateDictionary.get('searchValue');
      const searchEXP = `.*${searchVal}.*`;
      return Stuff.find({ recipe: { $regex: searchEXP, $options: 'i' } });
    }
    // Otherwise, return all of the stuff
    return Stuff.find();
  },
});
