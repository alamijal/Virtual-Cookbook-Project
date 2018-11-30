import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Search_Stuff_Page.onCreated(function () {
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('searchValue', null);
});

if (Meteor.isClient) {
  Template.Search_Stuff_Page.events({
    'submit #search': function (event) {
      event.preventDefault();
      Template.Search_Stuff_Page.templateDictionary.set('searchValue', ('searchValueI').val());
    },
  });
}

Template.Search_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffSearch() {
    return Stuff.find();
  },
});
