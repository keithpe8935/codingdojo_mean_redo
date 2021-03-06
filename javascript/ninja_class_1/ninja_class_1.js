function Ninja(name,health,speed,strength){
  this.name = name;
  this.health = (typeof health !== 'undefined' ? health : 100);

  // Speed and Strength are private attributes, so use var instead of this.
  var speed = (typeof speed !== 'undefined' ? speed: 3);
  var strength = (typeof strength !== 'undefined' ? strength: 3);

  // Set the value of the private attribute name.
  this.setName = function(name){
    this.name = name;
  }

  // Return the current value of the 'name' attribute.
  this.getName = function(){
    return this.name;
  }

  // Another function that displays and then returns the current name value.
  this.sayName = function(){
    console.log(`My name is ${this.name}.`)
    return this.name;
  }

  // Display the values of the attributes: name, health, speed and strength
  this.showStats = function(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}.`)
    return [strength, speed, this.health];
  }

  // Increment the health attribute by 10.
  this.drinkSake = function(){
    this.health += 10;
    return this.health;
  }
}

// Initiate the Ninja class as 'keith'
let keith = new Ninja('Keith',50);

// Speed and strength should be PRIVATE, only visible via getter functions.
// To make them private we use var instead of this.
// So here console.log for speed and strength display undefined instead of the
// correct values.
console.log('health',keith.health);
console.log('speed',keith.speed);
console.log('strength',keith.strength);

keith.setName('Johnny'); // Re-assign the name attribute of the
                         //keith instance of Ninja
keith.sayName();
let status = keith.showStats();

// Display the public attribute 'status'
console.log('status',status);

// Update the private attribute health and display the new value of 'health'.
console.log(keith.drinkSake());
