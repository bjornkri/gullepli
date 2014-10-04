'use strict';

angular
  .module('gullepliApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'timer',
    'ngAudio'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
