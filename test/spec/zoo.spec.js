(function() {
  'use strict';

  window.zoo = window.zoo || {};

  var expect = chai.expect;

    describe(Testing the namespace, function (){
        it(Should confirm namespace is window.zoo) (){
        expect(window.zoo).to.be.an('object');
        });
      });

    describe(Testing animal constructor function, function (){
        it(Should produce new animal) (){
        expect(window.zoo.Animal)to.be.an('object');
        })
        it(Should return undefined if an array is placed in the input) (){
        expect(window.zoo.Animal)to.be.an('object');
        })
      });
    })

}());
