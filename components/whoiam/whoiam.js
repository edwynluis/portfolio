angular.module('components')

.directive('whoiam', function() {
	return {
	  restrict: 'E',
	  scope: {},
	  templateUrl: "components/whoiam/whoiam.html",
	  replace: true,
	  controller: function($scope, $element) {
	  }
	};
});