if (Meteor.isClient) {
	Template.login.events({
    "submit .ng-valid": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      Router.go('home');

    }


  });

	Template.login.rendered = function(){
		$(".login-page").addClass("ng-enter");
		setTimeout(function(){
			$(".login-page").addClass("ng-enter-active");
		}, 300);
		setTimeout(function(){
			$(".login-page").removeClass("ng-enter");
			$(".login-page").removeClass("ng-enter-active");
		}, 600);
	};
  
}