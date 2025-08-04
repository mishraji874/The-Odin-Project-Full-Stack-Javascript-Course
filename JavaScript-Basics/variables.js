// by declaring the variable with let keyword we can reassign it without any issues
let name = "John";
let surname = "Doe";

console.log(name); // John
console.log(surname); // Doe

// Reassigning the variable
let age = 11;
console.log(age); // 11

age = 54;

console.log(age); // 54

// Using const for a variable that should not change
const pi = 3.14;
pi = 10; // here is the error, we cannot reassign a constant variable

console.log(pi); // Error: Assignment to constant variable

// There is also a third way, var, which was the original way variables were declared in JavaScript. 

// Numbers
console.log((3 + 2) - 76 * (1 + 1)); // This will output the result of the expression