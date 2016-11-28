(function(){
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;
  var Car = require('../app/library.js');
  describe("Car Class: Create a car, make it drive", function() {

    it("The car should be a type of `object`, and an instance of the `Car` class", function() {
      var honda = new Car('Honda');
      expect(typeof honda).to.equal(typeof {});
      expect(honda instanceof Car).to.be.ok;
    });

    it("The car should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Car();
      expect(gm.name).to.equal('General');
      expect(gm.model).to.be.equal('GM');
    });

    it("The car name and model should be a property of the car", function() {
      var toyota  = new Car('Toyota', 'Corolla');
      expect(toyota.name).to.be.equal('Toyota');
      expect(toyota.model).to.be.equal('Corolla');
    });

    it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
      var opel  = new Car('Opel', 'Omega 3');
      expect(opel.numOfDoors).to.be.equal(4);

      var porshe = new Car('Porshe', '911 Turbo');
      expect(porshe.numOfDoors).to.be.equal(2);
      porshe.drive(5);
      expect(porshe.speed).to.be.equal('250 km/h');
      expect((function(){return new Car('Koenigsegg', 'Agera R');}()).numOfDoors).to.be.equal(2);
    });

    it("The car shoud have four (4) wheels except its a type of trailer", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      expect(man.numOfWheels).to.be.equal(8);
      expect(man.isSaloon).to.be.equal(false);

      var koenigsegg = new Car('Koenigsegg', 'Agera R');
      expect(koenigsegg.numOfWheels).to.be.equal(4);
      expect(koenigsegg.isSaloon).to.be.ok;
    });

    it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      expect(man.speed).to.be.equal('0 km/h');
      man.drive(7);
      expect(man.speed).to.be.equal('77 km/h');
    });

    it("The car drive function should return the instance of the Car class", function() {
      var man  = new Car('MAN', 'Truck', 'trailer');
      var drivingMan = man.drive(7);
      
      expect(drivingMan instanceof Car).to.be.ok;
      expect(typeof drivingMan.drive).to.be.equal(typeof (function (){}));
      expect(man.speed).to.be.equal(drivingMan.speed);
    });

  });
})();