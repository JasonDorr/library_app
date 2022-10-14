let library = [];

const container = document.querySelector(".container");
const btn = document.createElement("button");
const header = document.querySelector("#header");
let bookIndex;

btn.setAttribute("id", "bookBtn");
btn.innerText = "New Book";
header.appendChild(btn);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

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

const addBookToLibrary = (book) => {
  library.push(book);
};

addBookToLibrary(theHobbit);
addBookToLibrary(eragon);

const createE = (e, c, attr, name) => {
  const newElement = document.createElement(e);
  newElement.classList.add(c);
  newElement.setAttribute(attr, name);
  return newElement;
};

const addCard = () => {
  library.forEach((book) => {
    bookIndex = library.indexOf(book);
    const div = createE("div", "card", "data-index", bookIndex);
    container.appendChild(div);
    div.innerHTML = `<h2 class = "title">${book.title}</h2> <h3>${book.author}</h3> <span>${book.pages}</span>`;
    const delBtn = createE("button", "delBtn", "data-type", "delBtn");
    div.appendChild(delBtn);
    delBtn.innerText = "X";
  });
};
addCard();
