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

console.log(theHobbit.info());
console.log(eragon.info());
