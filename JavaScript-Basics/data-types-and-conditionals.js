// A string is a piece of text… and is a fundamental building block of the language.
let greeting = "Hello, World!";
console.log(greeting); // Outputs: Hello, World!

// A number is a numeric value, which can be an integer or a floating-point number.
let age = 25;
console.log(age); // Outputs: 25

// A boolean is a true or false value.
let isJavaScriptFun = true;
console.log(isJavaScriptFun); // Outputs: true

// An array is a collection of items, which can be of any type.
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Outputs: [ 'apple', 'banana', 'cherry' ]

// An object is a collection of key-value pairs.
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(person); // Outputs: { name: 'Alice', age: 30, city: 'New York' }

// Null is a special value that represents the absence of any value.
let emptyValue = null;
console.log(emptyValue); // Outputs: null

// Undefined is a variable that has been declared but not assigned a value.
let notAssigned;
console.log(notAssigned); // Outputs: undefined

// Conditionals allow us to execute code based on certain conditions.
// In JavaScript they are written like this:

//     Greater/less than: a > b, a < b.
//     Greater/less than or equals: a >= b, a <= b.
//     Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
//     Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// All comparison operators return a boolean value:

//     true – means “yes”, “correct” or “the truth”.
//     false – means “no”, “wrong” or “not the truth”.

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

// String comparison

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

// For example:

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

// Comparison of different types

// When comparing values of different types, JavaScript converts the values to numbers.

// For example:

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.

// For example:

alert( true == 1 ); // true
alert( false == 0 ); // 

// Strict equality

// A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true

// The same thing happens with an empty string:

alert( '' == false ); // true

// This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

// What to do if we’d like to differentiate 0 from false?

// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

// Let’s try it:

alert( 0 === false ); // false, because the types are different

// There is also a “strict non-equality” operator !== analogous to !=.

// The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors.

// Comparison with null and undefined

// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===

//     These values are different, because each of them is a different type.

    alert( null === undefined ); // false

// For a non-strict check ==

//     There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

    alert( null == undefined ); // true

// For maths and other comparisons < > <= >=

//     null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// Now let’s see some funny things that happen when we apply these rules. And, what’s more important, how to not fall into a trap with them.
// Strange result: null vs 0

// Let’s compare null with a zero:

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// Mathematically, that’s strange. The last result states that “null is greater than or equal to zero”, so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
// An incomparable undefined

// The value undefined shouldn’t be compared to other values:

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// Why does it dislike zero so much? Always false!

// We get these results because:

//     Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
//     The equality check (3) returns false because undefined only equals null, undefined, and no other value.


