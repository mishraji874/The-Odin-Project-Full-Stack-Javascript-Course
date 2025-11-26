// Callbacks

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action (MDN documentation on callback functions).

// Callbacks are functions that get passed into other functions. For example:

myDiv.addEventListener("click", function(){
  // do something!
})

// Here, the function addEventListener() takes a callback (the “do something” function) and then calls it when myDiv gets clicked.


// Promises -> a promise is an object that might produce some data from a server and returns it as an object that we can use in our code

const getData = function() {
  // go fetch data from some API...
  // clean it up a bit and return it as an object:
  return data
}

const myData1 = getData()
const pieceOfData = myData1['whatever']
// The problem with this code is that if getData() takes a while to fetch the data from the API, then myData will be undefined when we try to access it. This is where promises come in:


const myData2 = getData() // if this is refactored to return a Promise...

myData2.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})
