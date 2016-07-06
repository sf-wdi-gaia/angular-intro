// App
angular
  .module("ngFun", [])
  .controller("PokemonCtrl", PokemonCtrl)
  .filter('reverseFilter', reverseFilter);

// Controllers
PokemonCtrl.$inject = ['$scope', 'reverseFilter'];
function PokemonCtrl($scope, reverseFilter) {
  $scope.trainer = {
    name: "Ash"
  };
  $scope.pokemon = [
    {
      Ndex: 25,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      Ndex: 10,
      name: 'Caterpie',
      type: 'Bug'
    },
    {
      Ndex: 39,
      name: 'Jigglypuff',
      type: 'Fairy'
    },
    {
      Ndex: 94,
       name: 'Gengar',
      type: 'Ghost'
    },
    {
      Ndex: 143,
      name: 'Snorlax',
      type: 'Normal'
    }
  ];
}

// Custom Filters
function reverseFilter() {
  // filters require a function to be returned
  return function(input) {
    input = input || '';
    var out = input.split("").reverse().join("");
    // uppercase only first letter
    out = out.toLowerCase();
    out = out[0].toUpperCase() + out.slice(1);
    return out;
  };
}
