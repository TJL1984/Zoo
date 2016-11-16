(function() {
  'use strict';

  /**
   * Produces name and age when creating a new animal.
   * @param {String} name identifies the animal's name
   * @param {Number} birthDate identifies the animal's age in years
   */

  function Animal(name, birthDate) {
    console.log(this.name);
    this.name = name || 'Miscellaneous';
    console.log(this.name);
    this.birthDate = birthDate || 'Name Unknown';
  }

  Animal.prototype.growl = function growl() {
    console.log
  }

  var Tiger = new Animal('Tony', 2007)
    console.log(Tiger)

  var Gorilla = new Animal('Harambe', 2001)
    console.log(Gorilla)

  function Tiger(name, birthDate) {
    Animal.apply(this, [name, birthDate]);
  }

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.constructor = Tiger;

Tiger.prototype.sprint = function sprint(duration) {
  return ("laps");
}

Tiger.prototype.newBorn = function newBorn() {
  var tigerBaby = new Tiger('baby tiger', 2016);
  return baby;
}

var babyTiger = new Animal ('Tigger', 2015)
  console.log(babyTiger);
  console.log(babyTiger.newBorn() );
  console.log(babyTiger.spring() )

  function Gorilla(name, birthDate) {
    Animal.apply(this, [name, birthDate]);
  }

Gorilla.prototype = Object.create(Animal.prototype);
Gorilla.prototype.constructor = Gorilla;

Gorilla.prototype.climb = function climb(duration) {
  return("treeclimber");

Gorilla.prototype.newBorn = function newBorn() {
  var gorillaBaby = new Gorilla('baby gorilla', 2015);
  return baby;
}

var babyGorilla = new Animal ('Kerchak', 2011);
  console.log(babyGorilla);
  console.log(babyGorilla.newBorn() );
  console.log(babyGorilla.climb("All the way up") );

})();
