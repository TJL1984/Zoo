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
    this.birthDate = birthDate || 'Not Known';
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




})();
