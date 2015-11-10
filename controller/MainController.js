/**
 * This is the Main Controller for the application. It should be attached to the Body tag.
 *
 * NOTE: This is NOT wrapped in an IFFY. They are technically not necessary but they are advisable to keep.
 */
angular.module('app').controller('MainController', function($scope){

    $scope.navigationTopData = [

        {
            title : 'Logs',
            elements : [2,3,4]
        },
        {
            title : 'Users',
            elements : [2,3,4]
        },
        {
            title : 'Stuff',
            elements : [2,3,4]
        }

    ];

    $scope.center = {
        lat: 51.505,
            lng: -0.09,
            zoom: 8
    }

});