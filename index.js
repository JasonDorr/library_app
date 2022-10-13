let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

const addBookToLibrary = (book) => {
  library.push(book);
};

const container = document.querySelector(".container");

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R Tolkien",
  295,
  "I have read this."
);

const eragon = new Book(
  "Eragon",
  "Christopher Paolini",
  500,
  "I have read this."
);

addBookToLibrary(theHobbit);
addBookToLibrary(eragon);

const addCard = () => {
  library.forEach((book) => {
    const div = document.createElement("div");
    container.appendChild(div);
    div.className = "card";
    div.innerHTML = `<h2 class = "title">${book.title}</h2> <h3>${book.author}</h3> <span>${book.pages}</span>`;
  });
};
