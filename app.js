/**
 * Technically we don't need to wrap the application in an IFFY. It's nice from a convention standpoint and to prevent
 *   leaks to the global namespace.
 */
(function (angular) {
    'use strict';

    angular.module('app', ['gridster', 'nvd3', 'ui.bootstrap', 'ui.utils', 'underscore-angularized', 'ngRoute', 'ngAnimate', 'leaflet-directive', 'coastguardNavigation', 'coastguardDashboard']);

    angular.module('app').config(function ($routeProvider) {

        $routeProvider.when('/lant', {
            controller: "LantController",
            templateUrl: "lant/lantHome.html"
        })
            .when('/pac', {
                controller: "PacController",
                templateUrl: "pac/pacHome.html"
            })
            .when('/cifer', {
                controller: "ciferController",
                templateUrl: "cifer/ciferHome.html"
            })
            .otherwise({redirectTo: '/home'});

    });

})(window.angular);
