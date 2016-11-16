(function() {
  'use strict';

  window.zoo = window.zoo || {};

  var expect = chai.expect;

    describe('testing the namespace', function() {
      console.log('I am here');
    });

        it('Should confirm namespace is window.zoo', function (){
        expect(window.zoo.Animal).to.be.a('function');
      });


    // describe(Testing animal constructor function, function (){
    //     it(Should produce new animal) (){
    //     expect(window.zoo.Animal)to.be.an('object');
    //     });
    //     it(Should return undefined if an array is in the input) (){
    //     expect(window.zoo.Animal)to
    //     });
    //   });




}());
