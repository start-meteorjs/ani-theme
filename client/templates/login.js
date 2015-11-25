if (Meteor.isClient) {
	Template.login.events({
    "submit .ng-valid": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      Router.go('home');

    }
  });

  
}