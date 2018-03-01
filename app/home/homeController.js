angular.module('pokedex').controller('HomeCtrl', [
    '$http',
    HomeController
])

function HomeController($http) {
    const self = this;
    self.getPokemon = function () {

        const URL = 'https://pokeapi.co/api/v2/pokedex/2/';

        $http.get(URL).then(function (pokemons) {
            self.listaPokemons = pokemons.data.pokemon_entries;
        })
    }

    self.getPokemon();
}

angular.module('pokedex').filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});


angular.module('pokedex').filter('removeHiffen', function () {
    return function (input) {
        return (!!input) ? input.replace("-", " ") : '';
    }
});