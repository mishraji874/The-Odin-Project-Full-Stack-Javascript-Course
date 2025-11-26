// Basic Syntax
// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });
// Here, fetch() takes in a URL as the first argument, and an optional options object as the second argument. It returns a Promise that resolves to the Response to that request, whether it is successful or not. We can use .then() to handle the successful response, and .catch() to handle any errors that may occur during the fetch operation.


const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });

// The first .then() handles the response from the fetch() operation. It returns the response as a JSON object using the .json() method. The second .then() uses the JSON object to set the src attribute of the img element.