const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};


// Async

// The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function. This is required to use await inside any function. When a function is declared with async, it automatically returns a promise; returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.

// An important thing to understand is async functions are just syntactical sugar for promises.

// The async keyword can also be used with any of the ways a function can be created. Said differently: it is valid to use an async function anywhere you can use a normal function.

const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
}

anArray.forEach(async item => {
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});

// Await

// The await keyword can only be used inside an async function. It makes JavaScript wait until the promise is resolved and returns its result. While JavaScript is waiting, other operations can continue running in the background (e.g., handling user input, rendering, etc.).

// await does the following: it tells JavaScript to wait for an asynchronous action to finish before continuing the function. It’s like a ‘pause until done’ keyword. The await keyword is used to get a value from a function where you would normally use .then(). Instead of calling .then() after the asynchronous function, you would assign a variable to the result using await. Then you can use the result in your code as you would in your synchronous code.

// Error handling

// Handling errors in async functions is very easy. Promises have the .catch() method for handling rejected promises, and since async functions just return a promise, you can call the function, and append a .catch() method to the end.

asyncFunctionCall().catch(err => {
  console.error(err)
});

// But there is another way: the mighty try/catch block! If you want to handle the error directly inside the async function, you can use try/catch with async/await syntax. If JavaScript throws an error in the try block, the catch block code will run instead (this can also be used for synchronous code).

async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}

// Doing this can look messy, but it is a very easy way to handle errors without appending .catch() after your function calls.


