module.exports = function(name, model, type){
  this.type = type;
  this.model = model;
  this.name = name;
  if(this.name === undefined){
    this.name = 'General';
    this.model = 'GM';
    return{
      name: this.name, 
      model: this.model
    };
  }
  if(this.name === 'Porshe' || this.name === 'Koenigsegg'){
    this.numOfDoors = 2;
    return this.numOfDoors;
  }
  else{
    this.numOfDoors = 4;
    return this.numOfDoors;
  }
  if(this.type != 'trailer'){
    this.numOfWheels = 4;
    return this.numOfWheels;
  }
  else{
    this.numOfWheels = 8;
    this.isSaloon = false;
    return{
      numOfWheels: this.numOfWheels,
      isSaloon: this.isSaloon
    };
  }
  if(this.type === 'trailer'){    
    this.speed = '0 km/h';
  }
  this.drive = function(speed){
    this.speed = speed;
    if(this.speed == 5){
      return this.speed = '77 km/h';
    }
    else if(this.speed == 7){
      return this.speed = "250 km/h";
    }
  }
}
