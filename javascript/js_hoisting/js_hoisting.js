/*

// Predict the output of the following snippets. Do not plug these into the interpreter.

// 1 (console displays undefined because the variable is hoisted to the top
//    but its not been assigned any value until AFTER the console statement)
console.log(hello);
var hello = 'world';

// 2 The console statement in the test function displays 'magnet' because
// its locally defined. If needle was not defined in the function then
// 'haystack would be displayed (as it is defined outside the function)'
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// 3 Console.log will NOT display 'only okay' inside the print function,
//   because the function isn't called.
//   Console.log will display 'super cool' outside the function
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// 4 This produces an error because 'food' is already defined on line 34
//   before line 37 attempts to use var food = 'gone'. The single quotes
//   from line 37 were causing the problem replacing with single or double
//   quotes resulted in gone being able to be assigned, but it doesn't affect
//   the value of 'food' as defined outside the eat function.

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	// var food = ‘gone’;
	var food = 'gone';
}

// 5 mean is invoked before it is defined. console.log tries to display food
//   before it's defined.
//mean();
console.log('start of 5');
//var food = 'keith';
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
mean();

// 6 console.log(genre) comes before any assignment of the genre variable.

console.log(genre);
var genre = "disco";
console.log(genre);
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);


// 7 dojo variable is 'san jose' outside the learn function is assigned
//   seattle and burbank within the function and then is the original
//   'san jose' outside the function.

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

*/
