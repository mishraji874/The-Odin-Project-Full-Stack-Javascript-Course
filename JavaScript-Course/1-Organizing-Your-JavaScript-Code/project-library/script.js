const myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Prototype method for toggling read status
Book.prototype.toggleRead = function() {
  this.read = !this.read;
};

// Add a book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

// Display all books
function displayBooks() {
  const library = document.getElementById("library");
  library.innerHTML = ""; // Clear display before re-rendering

  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? "Read ✅" : "Not Read ❌"}</p>
      <button class="toggle">Toggle Read</button>
      <button class="remove">Remove</button>
    `;

    // Buttons
    card.querySelector(".remove").addEventListener("click", () => removeBook(book.id));
    card.querySelector(".toggle").addEventListener("click", () => toggleReadStatus(book.id));

    library.appendChild(card);
  });
}

// Remove book by ID
function removeBook(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

// Toggle read status
function toggleReadStatus(id) {
  const book = myLibrary.find(book => book.id === id);
  if (book) {
    book.toggleRead();
    displayBooks();
  }
}

// --- FORM HANDLING ---
const dialog = document.getElementById("bookDialog");
const form = document.getElementById("bookForm");
const newBookBtn = document.getElementById("newBookBtn");
const cancelBtn = document.getElementById("cancelBtn");

newBookBtn.addEventListener("click", () => dialog.showModal());
cancelBtn.addEventListener("click", () => dialog.close());

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission refresh

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  form.reset();
  dialog.close();
});

// Add sample books
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);