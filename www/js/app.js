var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html',
      controller: 'HomeCtrl'
    })
    .state('messages', {
      url: '/messages',
      templateUrl: 'pages/messages.html',
      controller: 'MessagesCtrl'
    })
    .state('viewmessage', {
      url: '/viewmessage/:id',
      templateUrl: 'pages/viewmessage.html',
      controller: 'viewmessageCtrl'
    })
    

   $urlRouterProvider.otherwise("/");

})