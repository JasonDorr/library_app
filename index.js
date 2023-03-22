const library = [];

const bookList = document.querySelector("#book-list");
const bookBtn = document.querySelector("#bookBtn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector("#modal-form");
const formTitle = document.querySelector("#title");
const formAuthor = document.querySelector("#author");
const formPages = document.querySelector("#pages");
const formRead = document.querySelector("#read");
let bookIndex;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () =>
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);

const eragon = new Book("Eragon", "Christopher Paolini", 500, true);

const toggleModal = () => {
  if (modal.style.display === "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
};

bookBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    toggleModal();
  }
});

const addBookToLibrary = (book) => {
  library.push(book);
};

const createBook = (title, author, pages, read) => {
  const book = new Book(title, author, pages, read);
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

const isRead = () => {
  if (formRead.checked === true) {
    const n = library.length - 1;
    library[n].read = true;
  }
};

const addCard = () => {
  bookList.innerHTML = "";
  library.forEach((book) => {
    bookIndex = library.indexOf(book);
    const div = createE("div", "card", "data-index", bookIndex);
    bookList.appendChild(div);
    div.innerHTML = `<h2 class = "title">${book.title}</h2> <h3>${book.author}</h3> <span class='pages'>${book.pages} pages</span>`;

    const delBtn = createE("button", "delBtn", "data-index", bookIndex);

    delBtn.innerText = "Delete Book";

    delBtn.addEventListener("click", (e) => {
      library.splice(e.target.dataset.index, 1);
      div.style.display = "none";
    });

    const label = createE("label", "label", "data-index", bookIndex);
    label.setAttribute("for", "book-read");
    label.innerText = "Read";
    div.appendChild(label);

    const checkboxInput = createE("input", "checkbox", "data-index", bookIndex);
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("name", "book-read");
    checkboxInput.setAttribute("id", "book-read");
    if (library[bookIndex].read === true) {
      checkboxInput.setAttribute("checked", "");
    }
    label.appendChild(checkboxInput);
    div.appendChild(delBtn);
  });
};
addCard();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(
    createBook(
      formTitle.value,
      formAuthor.value,
      formPages.value,
      formRead.checked
    )
  );
  isRead();
  addCard();
  toggleModal();
  (formTitle.value = ""),
    (formAuthor.value = ""),
    (formPages.value = ""),
    (formRead.checked = false);
});
