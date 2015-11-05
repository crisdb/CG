(function(angular){
    'use strict';

    angular.module('app', ['gridster', 'nvd3', 'ui.bootstrap','ui.utils','underscore-angularized','ngRoute','ngAnimate']);
    
        angular.module('app').config(function($routeProvider) {

             .when('/lant', {
              controller: "LantController",
			  templateUrl: "lant/lantHome.html"
		})
			.when('/pac, {
			controller: 'PacController',
			templateUrl: 'pac/pacHome.html'
		})
			.when('/cifer, {
			controller: 'ciferController',
			templateUrl: 'cifer/ciferHome.html'
		})
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
