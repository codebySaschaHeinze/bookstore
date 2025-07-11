// Content rendern
// Preis für das Buch aus Array holen, dann in forSchleife packen, dann in innerHTML
// *"Autor:", "Veröffentlichung:", "Genre:" aus dem Array holen, dann forSchleife, dann innerHTML
// *Passende Elemente aus Array holen, dann forSchleife, dann innerHTML
// Usernamen einfügen
// User-Kommentare einfügen
// Inputbox-Informationen in User-Kommentare packen

function init() {
  // renderAll();
}

function renderContent1() {
  let ContentRef = document.getElementById("content-container1");
  ContentRef.innerHTML = /*html*/ ``;
}

function renderBooks() {
  let bookRef = document.getElementById("content-contaier1");
  bookRef.innerHTML = "";
  for (let i = 0; i < myBooks.length; i++) {}
}

function renderComments() {
  let commentsRef = document.getElementById("content-contaier1");
  commentsRef.innerHTML = "";
  for (let index = 0; index < comments.length; index++) {}
}

function saveBooksToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getBooksFromLocalStorage() {
  let myBooks = JSON.parse(localStorage.getItem("books"));
  if (myBooks === null) {
    saveBooksToLocalStorage();
  } else {
    allBooks = myBooks;
  }
}

function saveCommentsToLocalStorage() {
  localStorage.setItem("comments", JSON.stringify(comments));
}

function getCommentsFromLocalStorage() {
  let myComments = JSON.parse(localStorage.getItem("comments"));
  if (myComments === null) {
    saveCommentsToLocalStorage();
  } else {
    allComments = myComments;
  }
}
