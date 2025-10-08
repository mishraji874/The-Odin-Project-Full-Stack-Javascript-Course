import "./home.css";

export function loadHome() {
  const content = document.querySelector("#content");
  content.textContent = "";

  const containerDiv = document.createElement("div");
  containerDiv.id = "container-div";

  const heading = document.createElement("h2");
  heading.textContent = "Good vibes , Great bites";
  heading.classList.add("text", "heading");

  const description = document.createElement("p");
  description.textContent =
    "Rest-o-Rant isn’t just a restaurant – it’s an experience. Serving up mouthwatering dishes with bold flavors, we bring you comfort food with a twist.";
  description.classList.add("text", "description");

  const book = document.createElement("button");
  book.id = "book-btn";
  book.textContent = "Book an appointment";

  containerDiv.append(heading);
  containerDiv.append(description);
  containerDiv.append(book);
  content.append(containerDiv);
}
