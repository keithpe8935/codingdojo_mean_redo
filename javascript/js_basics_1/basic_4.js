// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
// • Print the length of all names to the console.
// • Now modify your code so only names with a length of 5 print.

let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log('names',names);
console.log('*** Print all names and their length ***');
for(let i=0; i<names.length; i++){
  console.log(names[i]+':'+names[i].length);
}
console.log('*** Print ONLY names with length of 5 ***');
for(let i=0; i<names.length; i++){
  if (names[i].length===5){
    console.log(names[i]+':'+names[i].length);
  }
}
