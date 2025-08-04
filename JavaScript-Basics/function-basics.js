function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
}

console.log(favoriteAnimal("Goat")); // Outputs: Goat is my favorite animal!

// Assignment Functions

// Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
    return number + 7;
}

console.log(add7(10)); // Outputs: 17

// Write a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4)); // Outputs: 12

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hello"));

//Write a function called lastLetter that takes a string and returns the very last letter of that string:

//    lastLetter("abcd") should return "d"

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

console.log(lastLetter("abcd")); // Outputs: d