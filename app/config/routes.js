angular.module('pokedex').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',

    function($stateProvider, $urlRouterProvider, $locationProvider){
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: "home/home.html"
        }).state('detalhe', {
            url: '/detalhe/:pokemonId',
            templateUrl: "detalhe/detalhe.html"
        })

        $urlRouterProvider.otherwise('/home');

        $locationProvider.html5Mode(true);
    }
])