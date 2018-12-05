// Tooltip Directive
/*
    Directive for activating tooltip resource in angular. It is used as attibute.
*/
angular.module('components').directive('tooltip', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.hover(
                    function(){
                        // on mouseenter
                        element.tooltip('show');
                    }, function(){
                        // on mouseleave
                        element.tooltip('hide');
                    });
            }
        };
    });
