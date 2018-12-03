import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/breakfastresults', {
  name: 'List_Searched_Stuff_Page_Breakfast',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Searched_Stuff_Page_Breakfast' });
  },
});

FlowRouter.route('/lunchresults', {
  name: 'List_Searched_Stuff_Page_Lunch',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Searched_Stuff_Page_Lunch' });
  },
});

FlowRouter.route('/dinnerresults', {
  name: 'List_Searched_Stuff_Page_Dinner',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Searched_Stuff_Page_Dinner' });
  },
});

FlowRouter.route('/dessertresults', {
  name: 'List_Searched_Stuff_Page_Dessert',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Searched_Stuff_Page_Dessert' });
  },
});
FlowRouter.route('/appetizersresults', {
  name: 'List_Searched_Stuff_Page_Appetizers',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Searched_Stuff_Page_Appetizers' });
  },
});
FlowRouter.route('/drinkssresults', {
  name: 'List_Searched_Stuff_Page_Drinks',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Searched_Stuff_Page_Drinks' });
  },
});
FlowRouter.route('/list', {
  name: 'List_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Stuff_Page' });
  },
});

FlowRouter.route('/add', {
  name: 'Add_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Stuff_Page' });
  },
});

FlowRouter.route('/search', {
  name: 'Search_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_Stuff_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});
FlowRouter.route('/stuff/:_id', {
  name: 'View_Full_Recipe',
  action() {
    BlazeLayout.render('App_Body', { main: 'View__Full_Recipe' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
