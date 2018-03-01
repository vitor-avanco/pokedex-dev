angular.module('pokedex').controller('DetalheCtrl', [
    '$http',
    '$stateParams',
    DetalheController
])

function DetalheController($http, $stateParams) {
    const self = this;
    self.getPokemonDetail = function () {

        const URL = 'https://pokeapi.co/api/v2/pokemon/'+ $stateParams.pokemonId;

        $http.get(URL).then(function (response) {
            self.pokemonName = response.data.name;
            self.pokemonSprite = response.data.sprites.front_default;
            self.pokemonStats = response.data.stats;
            self.pokemonMoves = response.data.moves;
        })
    }

    self.getPokemonDetail();
}