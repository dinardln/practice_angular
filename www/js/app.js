// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


var app = angular.module('myApp', ['ngRoute', 'ionic']);

app.config(['$routeProvider' ,function ($routeProvider) {
    'use strict';
    console.log("getting here");
    // route for the home page
    $routeProvider
    .when('/', {
      templateUrl : 'js/views/openticket.html',
      controller  : 'mainController'
    })
    .when('/openticket', {
      templateUrl : 'js/views/openticket.html',
      controller  : 'mainController'
    })
    .when('/showtickets', {
      templateUrl : 'js/views/showtickets.html',
      controller  : 'mainController'
    })
    .when('/order/:orderId', {
      templateUrl : 'js/views/order.html',
      controller  : 'orderController'
    })
    // route for the contact page
    .otherwise({
      redirectTo: '/'
    });
}]);



app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
