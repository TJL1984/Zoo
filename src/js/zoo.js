(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Animal = Animal;
  window.zoo.Tiger = Tiger;
  window.zoo.Gorilla = Gorilla;

  /**
   * Produces name and age when creating a new animal.
   * @param {String} name identifies the animal's name
   * @param {Number} birthDate identifies the animal's age in years
   */

  function Animal(name, birthDate) {
    // console.log(this.name);
    this.name = name || 'Miscellaneous';
    // console.log(this.name);
    this.birthDate = birthDate || 'Name Unknown';
  }

  Animal.prototype.growl = function growl() {
    console.log('growl');
  };

  // var Tiger = new Animal('Tony', 2007)
  //   console.log(Tiger)

  // var Gorilla = new Animal('Harambe', 2001)
  //   console.log(Gorilla)

  /**
   * Produces name and age when creating a Tiger.
   * @param {String} name identifies the tiger's name
   * @param {Number} birthDate identifies the tiger's age in years
   */
  function Tiger(name, birthDate) {
    Animal.apply(this, [name, birthDate]);
  }

  // Need to create tiger prototype
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.constructor = Tiger;
Tiger.prototype.kill = function kill() {
  return 'chew' + kill + 'prey';
};


Tiger.prototype.newBorn = function newBorn() {
  return new Tiger('baby tiger', 2015);
};

var babyTiger = new Tiger ('Tigger', 1);
  console.log(babyTiger);
  console.log(babyTiger.newBorn() );
  console.log(babyTiger.kill() );

  /**
   * Produces name and age when creating a new gorilla.
   * @param {String} name identifies the gorilla's name
   * @param {Number} birthDate identifies the gorilla's age in years
   */
  function Gorilla(name, birthDate) {
    Animal.apply(this, [name, birthDate] );
  }

Gorilla.prototype = Object.create(Animal.prototype);
Gorilla.prototype.constructor = Gorilla;
Gorilla.prototype.slam = function slam() {
  return("Fist bump");
};

Gorilla.prototype.newBorn = function newBorn() {
  return new Gorilla('baby gorilla', 2014);
};

var babyGorilla = new Gorilla ('Kerchak', 2);
  console.log(babyGorilla);
  console.log(babyGorilla.newBorn() );
  console.log(babyGorilla.slam("Fist bump") );

})();
