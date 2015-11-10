(function(angular){
    'use strict';
    
    angular.module('app').directive('navigationTop', function() {
        return {
            restrict: 'EA',
            scope: {
                 'logo' : '@',
                 'navData' : '='
            },
            templateUrl: 'directive/navigation-top/navigation-top.html',
            link: function(scope, element, attrs, fn) {

            }
        };
    });


})(window.angular);