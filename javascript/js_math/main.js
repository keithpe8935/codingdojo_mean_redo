// Math 1
// Write a function called zero_negativity(). This function should take
// an array. Return true if the input array contains no negative numbers,
// return false if it does.

function zero_negativity(arr){
    for(let i=0; i<arr.length; i++){
      if(arr[i] < 0){
        return false;
      }
    }
    return true;
}

let arr = [1,2,3,4,1,5,-2,3,4,1,5]
//let arr = [1,2,3,4,1,5,4,1,5]
if (zero_negativity(arr)){
  //console.log('The array did NOT contain any negative numbers');
} else {
  //console.log('The array contained AT LEAST ONE negative number');
}

// Math 2
// Write a function called is_even(). This function should take an number.
// Return true if the input number is even, return false if the number is odd.

function is_even(number){
    if (number % 2 === 0){
      // number IS even.
      return true;
    }
    // Number is NOT even
    return false;
}

let number = 12;
if (is_even(number)){
  //console.log(`${number} is an EVEN number`);
} else {
  //console.log(`${number} is NOT an EVEN number`);
}

// Math 3
// Write a function called how_many_even(). This function should take
// an array. Return the total number of elements in the array that are even.
// You may call is_even() to solve this.

function how_many_even(arr){
  let count = 0;
  for(let i=0; i<arr.length; i++){
    if(is_even(arr[i])){
      count += 1;
    }
  }
  return count;
}

let number_of_even_elements = how_many_even(arr);
//console.log(`There were ${number_of_even_elements} even numbers in [${arr}]`)

// Math 4
// Write a function called create_dummy_array(). This function should take
// a number n. Return an array of random numbers between 0 and 9
// with the length of n.

function create_dummy_array(n){
  // create an array of random numbers between 0 and 9 with length of n.
  let arr = [];
  for(let i=0; i<n; i++){
      // Create random number between 0 and 9
      // Math.random() * (max - min) + min
      // let random = Math.random() * 9-0 + 0;
      let random = Math.random() * 9;
      random = Math.ceil(random);
      arr.push(random);
  }
  return arr;
}

// console.log(create_dummy_array(14));

// Math 5
// Write a function called random_choice(). This function should take an array.
// Return a random element of the array, based on its length.
// This function should never return undefined.

function random_choice(arr){
  let random = Math.ceil(Math.random() * arr.length);
  return arr[random];
}

// console.log('random_choice:',random_choice(arr));
