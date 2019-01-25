app.controller('HomeCtrl', function($scope, $location) {
    //clear checkbox when start app
    $scope.checkboxModel = {
        value : false
    };
  
    $scope.viewMessages = function() {
        //clear when button clicked
        $scope.checkboxModel = {
        value : false
        };
        
        $location.path('/tab/messages');
    } 
})