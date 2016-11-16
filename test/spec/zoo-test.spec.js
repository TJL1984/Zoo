(function() {
  'use strict';
  window.zoo = window.zoo || {};
  var expect = chai.expect;

    describe('Testing the namespace', function() {
      console.log('I am here');

        it('Should confirm namespace is window.zoo', function() {
        expect(window.zoo.Animal).to.be.a('function');
        });
      });


    describe('Testing animal constructor function', function() {
      console.log('test for Animals');

        it('should produce new Animal', function() {
          expect(new window.zoo.Animal('Tony', 9)).to.be.an('object');
        });

        it('should make a prototype animal when given no arguments', function() {
          expect(new window.zoo.Animal({})).to.be.an('object');
        });
    });

    describe('Tiger constructor function', function() {
      console.log('test for Tiger');

        it('should make a Tiger when called', function() {
          var Tigger = new window.zoo.Tiger('Tigger', 1);
          expect(Tigger).to.be.an.instanceof(window.zoo.Tiger);
        });
        it('The birthDate argument should be a number', function () {
          var celebrant = new window.zoo.Tiger('celebrant', 2015);
          expect(celebrant.birthDate).to.be.a('Number');
        });

    });

    describe('Gorilla constructor function', function() {
      console.log('test for Gorilla');
        it('should make a Gorilla when called', function() {
          var Kerchak = new window.zoo.Gorilla('Kerchak', 2);
          expect(Kerchak).to.be.an.instanceof(window.zoo.Gorilla);
        });
        it('The birthDate argument should be a number', function () {
          var celebrant = new window.zoo.Gorilla('celebrant', 2015);
          expect(celebrant.birthDate).to.be.a('Number');
        });

    });


}());
