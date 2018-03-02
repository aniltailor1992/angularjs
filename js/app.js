var app = angular.module('myApp', ['ui.router', 'ngResource', 'app.controllers', 'app.services']);

app.config(function($stateProvider) {
  $stateProvider
  .state('/',{
    url: '/allareas',
    templateUrl: 'templates/allareas.html',
    controller: 'AreaCtrl'
  })
  .state('app',{
    url: '',
    abstract:true,
    templateUrl: 'templates/home.html'
  })
  .state('app.edit',{
    url: '/edit/{id:[0-9a-fA-F]{1,8}}',
    templateUrl: 'templates/update.html',
    controller: 'EditareaCtrl'
  })
  .state('app.create',{
    url: 'CreateNew',
    templateUrl: 'templates/create.html',
    controller: 'EditareaCtrl'
  })
})

app.run(function($state) {
  $state.go('/');
});