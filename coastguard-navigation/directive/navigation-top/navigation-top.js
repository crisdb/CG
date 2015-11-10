(function(angular){
    'use strict';
    
    angular.module('coastguardNavigation').directive('navigationTop', function() {
        return {
            restrict: 'EA',
            scope: {
                 'logo' : '@',
                 'navData' : '='
            },
            templateUrl: 'coastguard-navigation/directive/navigation-top/navigation-top.html',
            link: function(scope, element, attrs, fn) {

            }
        };
    });


})(window.angular);