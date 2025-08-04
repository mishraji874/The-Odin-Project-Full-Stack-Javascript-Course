// The “while” loop

// The while loop has the following syntax:

// while (condition) {
//   // code
//   // so-called "loop body"
// }

// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:

let i1 = 0;
while (i1 < 3) { // shows 0, then 1, then 2
  alert( i1 );
  i1++;
}

// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (i != 0) is while (i):

let i2 = 3;
while (i2) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i2 );
  i2--;
}

// Curly braces are not required for a single-line body

// If the loop body has a single statement, we can omit the curly braces {…}:

let i3 = 3;
while (i3) alert(i3--);

// The “do…while” loop

// The condition check can be moved below the loop body using the do..while syntax:

// do {
//   // loop body
// } while (condition);

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

// For example:

let i4 = 0;
do {
  alert( i4 );
  i4++;
} while (i4 < 3);

// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

// The “for” loop

// The for loop is more complex, but it’s also the most commonly used loop.

// It looks like this:

// for (begin; condition; step) {
//   // ... loop body ...
// }

// Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:

for (let i5 = 0; i5 < 3; i5++) { // shows 0, then 1, then 2
  alert(i5);
}

// Breaking the loop

// Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.

// For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

// The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

// The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

// Continue to the next iteration

// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

// We can use it if we’re done with the current iteration and would like to move on to the next one.

// The loop below uses continue to output only odd values:

for (let i6 = 0; i6 < 10; i6++) {

  // if true, skip the remaining part of the body
  if (i6 % 2 == 0) continue;

  alert(i6); // 1, then 3, 5, 7, 9
}

// For even values of i, the continue directive stops executing the body and passes control to the next iteration of for (with the next number). So the alert is only called for odd values.

