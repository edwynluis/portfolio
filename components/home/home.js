angular.module('components', [])

.directive('home', function() {
	return {
	  restrict: 'E',
	  scope: {},
	  templateUrl: "components/home/home.html",
	  replace: true,
	  controller: function($scope, $element) {
	  	angular.element('#carousel_item_0_0').carousel();
	  	
		$scope.selectedCategorie = -1;
		$scope.selectedItem = -1;

		$scope.selectItem = function( categorie, item ){
			this.selectedCategorie = categorie;
			this.selectedItem = item;
		};

		$scope.isSelected = function( categorie, item ){
			return this.selectedCategorie == categorie && this.selectedItem == item;
		};

		$scope.isSelectedCategorie = function( categorie ){
			return this.selectedCategorie == categorie;
		};
	  }
	};
});