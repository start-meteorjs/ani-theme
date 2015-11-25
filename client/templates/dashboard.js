if(Meteor.isClient){
	Template.dashboard.rendered = function(){
		if(!Session.get("animateChild")){
			$(".dashboard-page").addClass("ng-enter");
			setTimeout(function(){
				$(".dashboard-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".dashboard-page").removeClass("ng-enter");
				$(".dashboard-page").removeClass("ng-enter-active");
				Session.set("animateChild", true);
			}, 600);
		}

	};

	Template.dashboard.destroyed= function(){
		Session.set("animateChild", false);
	};

	Session.set("animateChild", false);
}