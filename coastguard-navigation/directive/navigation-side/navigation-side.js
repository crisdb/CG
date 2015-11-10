(function(angular){
    'use strict';
    
    angular.module('coastguardNavigation').directive('navigationSide', function() {
        return {
            restrict: 'EA',
            scope: {

            },
            templateUrl: 'coastguard-navigation/directive/navigation-side/navigation-side.html',
            link: function(scope, element, attrs, fn) {


            }
        };
    });


})(window.angular);