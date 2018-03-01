angular.module('pokedex').component('pokemonCard',{
    bindings: {
        pokemonid: '@', 
        name: '@'
    },
    template: `
        <div class="card">
            <img class="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{$ctrl.pokemonid}}.png" alt="{{$ctrl.name}}">
            <div class="card-body">
            <h5 class="card-title">#{{ $ctrl.pokemonid}} {{$ctrl.name}}</h5>
            <a ui-sref="detalhe({pokemonId: $ctrl.pokemonid})" class="btn btn-primary">Mais detalhes</a>
            </div>
        </div>
    ` 
})