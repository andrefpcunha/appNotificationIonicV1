app.controller('HomeCtrl', function($scope, $location, $http) {
    //clear checkbox when start app
    $scope.checkboxModel = {
        value : false
    };
  
    $scope.viewMessages = function() {
        //clear when button clicked
        $scope.checkboxModel = {
        value : false
        };
        
        $location.path('/messages');
    } 
})

app.controller('MessagesCtrl', function($scope, Messages, detailMessage) {
    Messages.getMessages().then(function(obj){
        //console.log(obj);
        $scope.messages = obj;
    });

    $scope.getDetail=function(ObjectData){
        //console.log(detailMessage);
        detailMessage.date = ObjectData.date;
        detailMessage.subject = ObjectData.title;
        detailMessage.msg = ObjectData.text;
        detailMessage.scrImg = ObjectData.img;
    }
  })

app.controller('viewmessageCtrl', function($scope, $stateParams, detailMessage) {
    //console.log(detailMessage);
    $scope.detailMessage = detailMessage;
    })

app.service('detailMessage', function() {
    this.date;
    this.subject;
    this.msg;
    this.scrImg;
})

app.factory('Messages', function($http) {

    var msgs = [];
  
    return {
        getMessages: function(){
            return $http.get("https://api.myjson.com/bins/runes").then(function(response){
            //return $http.get("https://api.myjson.com/bins/qf7k4").then(function(response){    //multiple messages
                msgs = response.data;

                return msgs;
            });
        }
    }
  })