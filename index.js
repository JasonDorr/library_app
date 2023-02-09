const library = [];

const container = document.querySelector(".container");
const bookBtn = document.querySelector("#bookBtn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector("#modal-form");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
let bookIndex;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () =>
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
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

const toggleModal = () => {
  if (modal.style.display === "none") {
    modal.style.display = "block";
  } else {
    modal.style.display = "none";
  }
};

bookBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

const addBookToLibrary = (book) => {
  library.push(book);
};

const createBook = (title, author, pages) => {
  const book = new Book(title, author, pages);
  return book;
};

addBookToLibrary(theHobbit);
addBookToLibrary(eragon);

const createE = (tag, className, attr, attrValue) => {
  const newElement = document.createElement(tag);
  newElement.classList.add(className);
  newElement.setAttribute(attr, attrValue);
  return newElement;
};

const addCard = () => {
  container.innerHTML = "";
  library.forEach((book) => {
    bookIndex = library.indexOf(book);
    const div = createE("div", "card", "data-index", bookIndex);
    container.appendChild(div);
    div.innerHTML = `<h2 class = "title">${book.title}</h2> <h3>${book.author}</h3> <span>${book.pages}</span>`;

    const delBtn = createE("button", "delBtn", "data-index", bookIndex);
    div.appendChild(delBtn);
    delBtn.innerText = "X";

    delBtn.addEventListener("click", (e) => {
      library.splice(e.target.dataset.index, 1);
      div.style.display = "none";
    });
  });
};
addCard();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(
    createBook(formTitle.value, formAuthor.value, formPages.value)
  );
  addCard();
  toggleModal();
});
