function Ninja(name,health,speed,strength){
  this.name = name;
  this.health = (typeof health !== 'undefined' ? health : 100);

  // Speed and Strength are private attributes, so use var instead of this.
  // to limit their scope to this method.
  var speed = (typeof speed !== 'undefined' ? speed: 3);
  var strength = (typeof strength !== 'undefined' ? strength: 3);

  // Set the value of the private attribute name.
  this.setName = function(name){
    this.name = name;
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

  // This method will deduct health points from the Ninja instance that
  // is past to it.
  this.punch = function(ninja){
    // Confirm that ninja is an instance of Ninja class.
    if(!(ninja instanceof Ninja) || (typeof ninja.health !== 'number')){
      return false;
    }

    // These two console lines are just for debugging
    console.log('typeof of ninja.health:', typeof ninja.health);
    console.log(`${name} is about to punch ${ninja.name}`);

    // Decrement the ninjas health by 5.
    ninja.health -= 5;

    // TODO: Think about returning the new health value instead of true
    return true;
  }

  // This method will add health points to the Ninja instance that
  // is past to it.
  this.kick = function(ninja){
    // Confirm that ninja is an instance of Ninja class.
    if(!(ninja instanceof Ninja) || (typeof ninja.health !== 'number')){
      return false;
    }

    // These two console lines are just for debugging
    console.log('typeof of ninja.health:', typeof ninja.health);
    console.log(`${name} is about to kick ${ninja.name}`);

    // Increment the ninjas health by 5.
    ninja.health += 5;

    // TODO: Think about returning the new health value instead of true.
    return true;

  }
}

// Initiate the Ninja class as 'keith'
let keith = new Ninja('Keith',50);
let eric = new Ninja('Eric',50);

// Display the public attribute 'status'
let status = keith.showStats();
console.log('status',status);

// Use keith to subtract 5 from health of Eric
keith.punch(eric);
console.log('erics NEW health:', eric.health);

// Use keith to add 5 to health of Eric
keith.kick(eric);
console.log('erics NEW health:', eric.health);
