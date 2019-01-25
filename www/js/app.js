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
    .state('tabs', {
      url: "/tab",
      templateUrl: "pages/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "pages/home.html",
          controller: 'HomeCtrl'
        }
      }
    })
    .state('tabs.messages', {
      url: "/messages",
      views: {
        'home-tab': {
          templateUrl: "pages/messages.html"
        }
      }
    })
    .state('tabs.viewmessage', {
      url: "/viewmessage",
      views: {
        'home-tab': {
          templateUrl: "pages/viewmessage.html"
        }
      }
    })

   $urlRouterProvider.otherwise("/tab/home");

})


