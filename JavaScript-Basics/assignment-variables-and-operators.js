// Add 2 numbers together! In your script, type in console.log(23 + 97)
console.log(23 + 97); // Outputs: 120

// Do the same thing but add 6 different numbers together.
console.log(5 + 10 + 15 + 20 + 25 + 30); // Outputs: 105

// Now log the value of the following expression: (4 + 6 + 9) / 77. The console should log approximately 0.24675.
console.log((4 + 6 + 9) / 77); // Outputs: 0.24675324675324675

// Let’s use some variables!

//     Add this statement to the script tag: let a = 10.
//     Below it, add console.log(a). When you run this, the browser console should log 10.
//     Afterwards, re-assign a with a different number value. Log a again afterwards and it should show the updated value (the previous log should still show the old value of 10 since that was before a was re-assigned).
//     Now add to the bottom of the script let b = 7 * a.
//     Log what b is. It should log the result of 7 multiplied by whatever you re-assigned a with.

let a = 10;
console.log(a); // Outputs: 10

a = 20;
console.log(a); // Outputs: 20

let b = 7 * a;
console.log(b); // Outputs: 140 (if a is 20)

// Try this sequence:

//     Declare a const variable max with the value 57.
//     Declare another const variable actual and assign it max - 13.
//     Declare another const variable percentage and assign it actual / max.
//     Now if you log percentage, you should see a value in the console like 0.7719.

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage); // Outputs: 0.7719298245614035