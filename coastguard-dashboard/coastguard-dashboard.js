(function(angular){
    'use strict';

    angular.module('coastguardDashboard', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);
    
        angular.module('coastguardDashboard').config(function($routeProvider) {

            $routeProvider.when('/dashboard',{templateUrl: 'coastguard-dashboard/partial/dashboard-view/dashboard-view.html'});
            /* Add New Routes Above */

        });
    


})(window.angular);