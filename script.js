'use strict';

const tbody = document.querySelector('.tbody');

//////////////////////////////////////////////////////////////// myLibrary ARRAY ///////////////////////////////////////////////////////
let myLibrary = [
  {
    author: 'Chinua Achebe',
    country: 'Nigeria',
    imageLink: 'images/things-fall-apart.jpg',
    language: 'English',
    link: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
    pages: 209,
    title: 'Things Fall Apart',
    year: 1958,
    read: true,
  },
  {
    author: 'Hans Christian Andersen',
    country: 'Denmark',
    imageLink: 'images/fairy-tales.jpg',
    language: 'Danish',
    link: 'https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n',
    pages: 784,
    title: 'Fairy tales',
    year: 1836,
    read: true,
  },
  {
    author: 'Dante Alighieri',
    country: 'Italy',
    imageLink: 'images/the-divine-comedy.jpg',
    language: 'Italian',
    link: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
    pages: 928,
    title: 'The Divine Comedy',
    year: 1315,
    read: false,
  },
  {
    author: 'Unknown',
    country: 'Sumer and Akkadian Empire',
    imageLink: 'images/the-epic-of-gilgamesh.jpg',
    language: 'Akkadian',
    link: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n',
    pages: 160,
    title: 'The Epic Of Gilgamesh',
    year: -1700,
    read: true,
  },
  {
    author: 'Unknown',
    country: 'Achaemenid Empire',
    imageLink: 'images/the-book-of-job.jpg',
    language: 'Hebrew',
    link: 'https://en.wikipedia.org/wiki/Book_of_Job\n',
    pages: 176,
    title: 'The Book Of Job',
    year: -600,
    read: false,
  },
  {
    author: 'Unknown',
    country: 'India/Iran/Iraq/Egypt/Tajikistan',
    imageLink: 'images/one-thousand-and-one-nights.jpg',
    language: 'Arabic',
    link: 'https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n',
    pages: 288,
    title: 'One Thousand and One Nights',
    year: 1200,
    read: false,
  },
  {
    author: 'Unknown',
    country: 'Iceland',
    imageLink: 'images/njals-saga.jpg',
    language: 'Old Norse',
    link: 'https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n',
    pages: 384,
    title: "Nj\u00e1l's Saga",
    year: 1350,
    read: false,
  },
];

// prints every book in the array myLibrary
myLibrary.forEach((book) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${book.author}</td>
  <td>${book.title}</td>
  <td>${book.pages}</td>
  <td>${book.read}</td>`;
  tbody.appendChild(tr);
  // console.log(`Author: ${book.author}, Book Title: ${book.title}, Pages: ${book.pages}`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////// BOOK CONSTRUCTOR ///////////////////////////////////////////////////////

Books.prototype.info = function () {
  if (this.read) return `${this.title} by ${this.author}, ${this.pages}, was read`;
  else return `${this.title} by ${this.author}, ${this.pages}, not read yet`;
};

// BOOK CONSTRUCTOR
function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////// ADDING BOOK TO THE myLibrary ARRAY ///////////////////////////////////////////////////////

// ADD BOOK TO THE ARRAY FUNCTION
function addBookToLibrary(title, author, pages, read) {
  const newbook = new Books(title, author, pages, read);
  console.log(newbook);
  return newbook;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
