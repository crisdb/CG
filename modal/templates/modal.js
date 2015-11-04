(function(angular){
    'use strict';
    
    angular.module('<%= appname %>').controller('<%= ctrlname %>',function($scope, $modalInstance){

        $scope.save = function(){
            $modalInstance.close("Done");
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    });
    
})(window.angular);