function init() {
  getBooks();
}

// books in forSchleife

function getBooks() {
  let bookRef = document.getElementById("content-container");
  bookRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    bookRef.innerHTML += getBookTemplate(indexBooks);
  }
}

// comments in forSchleife
function getComments() {
  let commentRef = document.getElementById("content-container");
  commentRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    let book = book[indexBooks];
    for (
      let indexComments = 0;
      indexComments < book.comments.length;
      indexComments++
    ) {}
  }
  return indexComments;
}

function changeLiked(indexBooks) {}
