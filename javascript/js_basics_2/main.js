// In this assignment, complete the function magic_multiply and
// ensure it passes all the test inputs and matches their results.
// Modify magic_multiply until all the tests pass.
// Do not create a new magic_multiply for each test!

function magic_multiply(x, y){

    // For test 4 we need to check that we're not trying to multiple strings.
    if (typeof y === 'string'){
      console.log('Error: Cannot multiple by string');
      return undefined; // Should we return null or undefined.
    }

    // For test 5 we want to return a string, repeated 'y' times.
    if (typeof x === 'string'){
      return x.repeat(y);
    }

    // For test 3 we need to check if x is an array and multiple each of
    // it's elements by y
    console.log('typeof x', typeof x);
    if(Array.isArray(x)){
      console.log('x is array',x);
      for(let i=0; i<x.length; i++){
        x[i] *= y;
      }
    } else {
      x = x * y;
    }
    return x;
}

console.log('*** Test 1 ***');
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

console.log('*** Test 2 ***');
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

console.log('*** Test 3 ***');
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

console.log('*** Test 4 ***');
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"


console.log('*** Test 5 ***');
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"
