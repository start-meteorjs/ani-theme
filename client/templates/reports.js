if(Meteor.isClient){
	Template.reports.rendered = function(){
		if(Session.get("animateChild")){
			$(".reports-page").addClass("ng-enter");
			setTimeout(function(){
				$(".reports-page").addClass("ng-enter-active");
			}, 300);
			setTimeout(function(){
				$(".reports-page").removeClass("ng-enter");
				$(".reports-page").removeClass("ng-enter-active");
			}, 600);
		}
	};
}