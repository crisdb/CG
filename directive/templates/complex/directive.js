(function(angular){
    'use strict';
    
    angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', function() {
        return {
            restrict: 'EA',
            scope: {

            },
            templateUrl: '<%= htmlPath %>',
            link: function(scope, element, attrs, fn) {


            }
        };
    });


})(window.angular);