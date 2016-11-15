(function() {
  'use strict';

  function Animal(name) {
    console.log(this.name);
    this.name = name || 'Miscellaneous';
    console.log(this.name);
  }
  Animal.prototype.growl = function growl() {
    console.log
  }

  var tony = new Animal('Tony')
    console.log(tony)

  var harambe = new Animal('Harambe')
    console.log(harambe)

  function Tiger (name, birthdate) {

  }

})();
