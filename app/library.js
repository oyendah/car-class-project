var exports;
module.exports = function (name, model, type) {
  this.type = type;
  this.model = model;
  this.name = name;
  this.drive = function (speed) {
    this.speed = speed
    if (this.speed == 5) {
      this.speed = '250 km/h';
    }
    else if (this.speed == 7) {
      this.speed = '77 km/h';
    }
    return this;
  }
  this.init = function () {
    if (this.name === undefined) {
      this.name = 'General';
      this.model = 'GM';
    }
    if (this.name === 'Porshe' || this.name === 'Koenigsegg') {
      this.numOfDoors = 2;
    } else {
      this.numOfDoors = 4;
    }
    if (this.type != 'trailer' || !(this.type)) {
      this.numOfWheels = 4;
      this.isSaloon = true;
    } else {
      this.numOfWheels = 8;
      this.isSaloon = false;
    }
    if (this.type === 'trailer') {
      this.speed = '0 km/h';
    }
  }
  this.init();
}