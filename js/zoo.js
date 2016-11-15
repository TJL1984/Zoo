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

  var tony = new Animal('Tony', 9)
    console.log(tony)

  var harambe = new Animal('Harambe', 16)
    console.log(harambe)

  function Tiger (name, birthdate) { // I need to define a property on each prototype.

    Animal.apply( this, [name] );
      console.log(this, arguments);

  }

})();
