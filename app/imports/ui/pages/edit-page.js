import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditPageForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_Stuff_Page');
    },
  },
  deleteButton: {
    onSuccess: function onSuccess(formtype, result) {
      Stuff.remove({ _id: FlowRouter.getParam('_id') });
      FlowRouter.go('/');
    },
  },
});

Template.Edit_Page.helpers({
  getDoc() {
    return Stuff.findOne(FlowRouter.getParam('_id'));
  },
  stuffCollection() {
    return Stuff;
  },
  'submit center.aligned.button.delete': function (event, instance) {
    Stuff.remove({ _id: FlowRouter.getParam('_id') });
    FlowRouter.go('/');
  },
});
