function init() {
  getBooks();
  // console.log(books);
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
    let book = books[indexBooks];
    for (
      let indexComments = 0;
      indexComments < book.comments.length;
      indexComments++
    ) {}
  }
  // return indexComments;
}

function changeLiked(indexBooks) {
  books[indexBooks].liked = !books[indexBooks].liked;

  if (books[indexBooks].liked === true) {
    greenHeart(indexBooks);
  } else {
    grayHeart(indexBooks);
  }
}

// Mit toggle könnte man sich eine Funktion sparen, aber das passt erstmal so
function greenHeart(indexBooks) {
  let green = document.getElementById("green-heart-img" + indexBooks);
  let gray = document.getElementById("gray-heart-img" + indexBooks);
  green.classList.add("d_none");
  gray.classList.remove("d_none");
}

function grayHeart(indexBooks) {
  let gray = document.getElementById("gray-heart-img" + indexBooks);
  let green = document.getElementById("green-heart-img" + indexBooks);
  gray.classList.add("d_none");
  green.classList.remove("d_none");
}
