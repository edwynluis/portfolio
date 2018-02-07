angular.module('components')

.directive('whoiam', function() {
	return {
	  restrict: 'E',
	  scope: {},
	  templateUrl: "whoiam.html",
	  replace: true,
	  controller: function($scope, $element) {
	  }
	};
});