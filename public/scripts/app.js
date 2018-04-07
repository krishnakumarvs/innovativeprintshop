'use strict';

/**
 * @ngdoc overview
 * @name kakesSampleApp
 * @description
 * # kakesSampleApp
 *
 * Main module of the application.
 */
angular
  .module('kakesSampleApp', [
    'ngRoute',
    'ngImgCrop',
    'toastr'
  ])
  .config(function ($routeProvider, $locationProvider) {
    
    $locationProvider.hashPrefix('');

    $routeProvider
      /*.when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })*/

      /*.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })*/

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/dashboardMain', {
        templateUrl: 'views/dashboardmain.html',
        controller: 'DashboardmainCtrl',
        controllerAs: 'dashboardMain'
      })
      .when('/dashboardSub', {
        templateUrl: 'views/dashboardsub.html',
        controller: 'DashboardsubCtrl',
        controllerAs: 'dashboardSub'
      })
      .when('/allClassesSummary', {
        templateUrl: 'views/allclassessummary.html',
        controller: 'AllclassessummaryCtrl',
        controllerAs: 'allClassesSummary'
      })
      .when('/previewIdClassBased', {
        templateUrl: 'views/previewidclassbased.html',
        controller: 'PreviewidclassbasedCtrl',
        controllerAs: 'previewIdClassBased'
      })
      .otherwise({
        redirectTo: '/login'
      });

      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });
  })

  .controller('appController', function ($location, $rootScope) {
        let routesWithSideMenu = ["/dashboardMain" , "/allClassesSummary" , "dashboardSub"];
        


        $rootScope.$on( "$routeChangeStart", function(event, next, current) {
          
          let currentLocation =  $location.$$path;

          $rootScope.showSideMenu = (routesWithSideMenu.indexOf(currentLocation) != -1) ? true : false;
          //event.stopPropagation();
        });
    });;
