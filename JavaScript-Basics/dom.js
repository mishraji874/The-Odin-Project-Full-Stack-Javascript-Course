// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

//     a <p> with red text that says “Hey I’m red!”
//     an <h3> with blue text that says “I’m a blue h3!”
//     a <div> with a black border and pink background color with the following elements inside of it:
//         another <h1> that says “I’m in a div”
//         a <p> that says “ME TOO!”
//         Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.


const container = document.querySelector("#container");

// Create a <p> element
const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";
// Append the <p> to the container
container.appendChild(p);

// Create an <h3> element
const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
// Append the <h3> to the container
container.appendChild(h3);

// Create a <div> element
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

// Create an <h1> element inside the <div>
const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
// Append the <h1> to the <div>
div.appendChild(divH1);

// Create a <p> element inside
const divP = document.createElement("p");
divP.textContent = "ME TOO!";
// Append the <p> to the <div>
div.appendChild(divP);

// Append the <div> to the container
container.appendChild(div);

// Bonus: Add a button that when clicked, alerts “YAY! You clicked me!”
// Create a button element
const button = document.createElement("button");
button.textContent = "Click Me!";
button.addEventListener("click", () => {
  alert("YAY! You clicked me!");
});
// Append the button to the container
container.appendChild(button);