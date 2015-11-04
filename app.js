(function(angular){
    'use strict';

    angular.module('app', ['gridster', 'nvd3', 'ui.bootstrap','ui.utils','underscore-angularized','ngRoute','ngAnimate']);
    
        angular.module('app').config(function($routeProvider) {

            /* Add New Routes Above */
            $routeProvider.otherwise({redirectTo:'/home'});

        });
    
    angular.module('app').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });


})(window.angular);
