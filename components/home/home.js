angular.module('components', [])

.directive('home', function() {
	return {
	  restrict: 'E',
	  scope: {},
	  templateUrl: 'home.html',
	  replace: true,
	  controller: function($scope, $element) {
		selectedCategorie = -1;
		selectedItem = -1;

		selectItem( categorie, item ){
			this.selectedCategorie = categorie;
			this.selectedItem = item;
		};

		isSelected( categorie, item ){
			return this.selectedCategorie == categorie && this.selectedItem == item;
		};

		isSelectedCategorie( categorie ){
			return this.selectedCategorie == categorie;
		};
	  }
	};
});