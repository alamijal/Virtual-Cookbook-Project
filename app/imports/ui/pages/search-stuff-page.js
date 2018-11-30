/* eslint-env jquery */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Search_Stuff_Page.onCreated(function () {
  this.templateDictionary = new ReactiveDict();
  this.templateDictionary.set('searchValue', null);
  this.searchParam = new ReactiveVar();
});

if (Meteor.isClient) {
  Template.Search_Stuff_Page.events({
    'submit .center.aligned.form-wrapper-2.cf': function (event, instance) {
      console.log('submit triggered');
      instance.searchParam.set($('#searchValue').val());
      event.preventDefault();
    },
  });
}

Template.Search_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffSearch() {
    const instance = Template.instance();
    console.log(instance.searchParam);
    return Stuff.find({ recipe: 'Eggs' });
  },
});
