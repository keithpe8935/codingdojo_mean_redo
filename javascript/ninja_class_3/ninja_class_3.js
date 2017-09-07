class Ninja{
  constructor(name,health,speed,strength){
    this.name = name;
    this.health = (typeof health !== 'undefined' ? health : 100);

    // Speed and strength are private attributes, so use var instead of this.
    // to limit their scope to this method.
    var _speed = (typeof speed !== 'undefined' ? speed : 3);
    var _strength = (typeof strength !== 'undefined' ? strength : 3);

    // Display the values of the attributes: name, health, speed and strength
    // Put the showStats method inside the constructor so we can access the
    // private vars speed and strength
    this.showStats = function(){
      console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${_speed}, Strength: ${_strength}.`)
      return [_strength, _speed, this.health];
    }
  }

  // Set the value of the private attribute name.
  setName(name){
    this.name = name;
  }

  // Another function that displays and then returns the current name value.
  sayName(){
    console.log(`My name is ${this.name}.`)
    return this.name;
  }

  // Increment the health attribute by 10.
  drinkSake(){
    this.health += 10;
    return this.health;
  }

  // This method will deduct health points from the Ninja instance that
  // is past to it.
  punch(ninja){
    // Confirm that ninja is an instance of Ninja class.
    if(!(ninja instanceof Ninja) || (typeof ninja.health !== 'number')){
      return false;
    }

    // Decrement the ninjas health by 5.
    ninja.health -= 5;

    // TODO: Think about returning the new health value instead of true
    return true;
  }

  // This method will add health points to the Ninja instance that
  // is past to it.
  kick(ninja){
    // Confirm that ninja is an instance of Ninja class.
    if(!(ninja instanceof Ninja) || (typeof ninja.health !== 'number')){
      return false;
    }

    // Increment the ninjas health by 5.
    ninja.health += 5;

    // TODO: Think about returning the new health value instead of true.
    return true;
  }
}

// Initiate the Ninja class as 'keith'
let keith = new Ninja('Keith',50);
let eric = new Ninja('Eric',50);

// Display name
keith.sayName();

// Display the public attribute 'status'
let status = keith.showStats();
console.log('status',status);

// Use keith to subtract 5 from health of Eric
console.log(`${eric.name}'s CURRENT health: ${eric.health}`);
console.log(`${keith.name} is about to punch ${eric.name}`)
keith.punch(eric);
console.log(`${eric.name}'s NEW health: ${eric.health}`);

// Use keith to add 5 to health of Eric
console.log(`${eric.name}'s CURRENT health: ${eric.health}`);
console.log(`${keith.name} is about to kick ${eric.name}`)
keith.kick(eric);
console.log(`${eric.name}'s NEW health: ${eric.health}`);
