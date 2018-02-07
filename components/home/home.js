angular.module('components', [])

.directive('home', function() {
	return {
	  restrict: 'E',
	  scope: {},
	  templateUrl: "home.html",
	  replace: true,
	  controller: function($scope, $element) {
		selectedCategorie = -1;
		selectedItem = -1;

		selectItem = function( categorie, item ){
			this.selectedCategorie = categorie;
			this.selectedItem = item;
		};

		isSelected = function( categorie, item ){
			return this.selectedCategorie == categorie && this.selectedItem == item;
		};

		isSelectedCategorie = function( categorie ){
			return this.selectedCategorie == categorie;
		};
	  }
	};
});