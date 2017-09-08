/*
  ninja_class_3.js is a copy of ninja_class_2.js, but we create the
  Sensei class by extending the Ninja class. Here we highlight using
  super to call the parents constructor before calling the Sensei constructor.
  And then we use super to call the parent class's drinkSake() method.

  I commented out a lot of the code used in the ninja_class_2.js to make
  it easier to focus on the Sensei Class code.
*/

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

class Sensei extends Ninja {
  constructor(name,health,speed,strength,wisdom){
    super(name,health,speed,strength);
    var _wisdom = (typeof wisdom!== 'undefined' ? wisdom : 10);

  }
    // Putting speakWisdom OUTSIDE the constructor allows the super.drinkSake
    // to work. If I put it INSIDE the constructor it gave me an error about
    // super being unexected.
    speakWisdom(){
      console.log("Inside speakWisdom: Calling drinkSake (from parent)");
      super.drinkSake();
      console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}
/*

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
*/

let super_sensei = new Sensei("Master Splinter");
super_sensei.sayName();
super_sensei.showStats();
// speakWisdom also calls drinkSake(), which increases health by 10.
super_sensei.speakWisdom();
// Confirm that health has been incremented by 10.
super_sensei.showStats();
