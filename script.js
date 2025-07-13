function init() {
  getBooks();
  // console.log(books);
}

// books in forSchleife (indexBooks beinhaltet alle Informationen von books (bg.js))
function getBooks() {
  let bookRef = document.getElementById("content-container");
  bookRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    bookRef.innerHTML += getBookTemplate(indexBooks);
  }
}

// comments in forSchleife (weil die zwar in books sind, aber in extra Arrays)
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
  // Entsprechender Funktionsaufruf, wenn true der Fall ist
  if (books[indexBooks].liked === true) {
    // Wert ändert/aktuallisiert sich
    books[indexBooks].liked = false;
    minusALike(indexBooks);
    greenHeart(indexBooks);

    // Ist true nicht der Fall, dann das hier
  } else {
    books[indexBooks].liked = true;
    plusALike(indexBooks);
    grayHeart(indexBooks);
  }
}

// Mit toggle könnte man sich eine Funktion* sparen, aber das passt erstmal so
function greenHeart(indexBooks) {
  let green = document.getElementById("green-heart-img" + indexBooks);
  let gray = document.getElementById("gray-heart-img" + indexBooks);
  green.classList.add("d_none");
  gray.classList.remove("d_none");
}
// *
function grayHeart(indexBooks) {
  let gray = document.getElementById("gray-heart-img" + indexBooks);
  let green = document.getElementById("green-heart-img" + indexBooks);
  gray.classList.add("d_none");
  green.classList.remove("d_none");
}

// Bei Aufruf wird im entsprechenden Index +1 gezählt
function plusALike(indexBooks) {
  books[indexBooks].likes += 1;
  let likesRef = document.getElementById("likes" + indexBooks);
  likesRef.innerText = books[indexBooks].likes;
}
// Wie oben nur -1
function minusALike(indexBooks) {
  books[indexBooks].likes -= 1;
  let likesRef = document.getElementById("likes" + indexBooks);
  likesRef.innerText = books[indexBooks].likes;
}
