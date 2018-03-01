angular.module('pokedex').config([
    '$stateProvider',
    '$urlRouterProvider',

    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: "home/home.html"
        }).state('detalhe', {
            url: '/detalhe',
            templateUrl: "detalhe/detalhe.html"
        })


        $urlRouterProvider.otherwise('/home')
    }
])