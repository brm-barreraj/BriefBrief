angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController', {
    url: '/appTaps',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  
  .state('tabsController.activos', {
    cache: false,
    url: '/activos',
    views: {
      'tab1': {
        templateUrl: 'templates/activos.html',
        controller: 'activosCtrl'
      }
    }
  })

  .state('tabsController.pendientes', {
    cache: false,
    url: '/pendientes',
    views: {
      'tab2': {
        templateUrl: 'templates/pendientes.html',
        controller: 'pendientesCtrl'
      }
    }
  })

  .state('tabsController.cerrados', {
    cache: false,
    url: '/cerrados',
    views: {
      'tab3': {
        templateUrl: 'templates/cerrados.html',
        controller: 'cerradosCtrl'
      }
    }
  })

  .state('login', {
    url: '/login/:tipoUsuario',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('invitado', {
    url: '/invitado',
    templateUrl: 'templates/invitado.html',
    controller: 'invitadoCtrl'
  })

  .state('tipoUsuario', {
    cache: false,
    url: '/tipoUsuario',
    templateUrl: 'templates/tipoUsuario.html',
    controller: 'tipoUsuarioCtrl'
  })

  .state('internaBrief', {
    cache: false,
    url: '/internaBrief/:idBrief',
    templateUrl: 'templates/internaBrief.html',
    controller: 'internaBriefCtrl'
  })

  .state('brmInternaBrief', {
    cache: false,
    url: '/brmInternaBrief/:idBrief',
    templateUrl: 'templates/brmInternaBrief.html',
    controller: 'brmInternaBriefCtrl'
  })

  .state('crearBriefP1', {
    cache: false,
    url: '/crearBriefP1',
    templateUrl: 'templates/crearBriefP1.html',
    controller: 'crearBriefP1Ctrl'
  })

  .state('consultaTusBriefs', {
    cache: false,
    url: '/brmConsultaBrief',
    templateUrl: 'templates/consultaTusBriefs.html',
    controller: 'consultaTusBriefsCtrl'
  })

  .state('crearBriefP2', {
    url: '/crearBriefP2',
    templateUrl: 'templates/crearBriefP2.html',
    controller: 'crearBriefP2Ctrl'
  })

  .state('crearBriefP3', {
    url: '/crearBriefP3',
    templateUrl: 'templates/crearBriefP3.html',
    controller: 'crearBriefP3Ctrl'
  })

  .state('crearBriefP4', {
    url: '/crearBriefP4',
    templateUrl: 'templates/crearBriefP4.html',
    controller: 'crearBriefP4Ctrl'
  })

  .state('programarReunion', {
    cache: false,
    url: '/programarReunion/:idBrief',
    templateUrl: 'templates/programarReunion.html',
    controller: 'programarReunionCtrl'
  })

//$urlRouterProvider.otherwise('/appTaps/activos')
$urlRouterProvider.otherwise('tipoUsuario')
});