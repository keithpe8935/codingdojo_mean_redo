// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
// • Print every element to the console.
// • Now print every element except the final number.

let z = [9,10,6,5,-1,20,13,2];
console.log('z',z);
console.log("Print every element to the console");
for(let i = 0; i < z.length; i++){
  console.log(`z(${i}):${z[i]}`);
}
console.log("Print every element EXCEPT the final number, to the console");
for(let i=0; i < z.length-1; i++){
  console.log(`z(${i}):${z[i]}`);
}
