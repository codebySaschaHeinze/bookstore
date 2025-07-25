// onload siehe html-<body>
function init() {
  // erst localStorage aufrufen
  getAllFromLocalStorage();
  // dann rendern
  renderBooks();
  showLikedBooks();
}

// books in forSchleife (indexBooks beinhaltet alle Informationen von books (bg.js))
function renderBooks() {
  // bookRef weiß, wo es stattfindet
  let bookRef = document.getElementById("content-container");
  // entsprechenden Container leeren
  bookRef.innerHTML = "";
  // forSchleife für indexBooks (Informationssammlung)
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    // bookRef mit Verweis wohin genau, nimmt die getBookTemplate(indexBooks) mitsamt dem indexBooks
    let hearts = showRightLike(indexBooks);
    bookRef.innerHTML += getBookTemplate(
      indexBooks,
      hearts.greenHeart,
      hearts.grayHeart
    );

    let tableRef = document.getElementById("comment-table" + indexBooks);
    // Innerhalb des books-Objekts stecken Arrays, die dann auch innerhalb der forSchleife gezählt werden müssen (Außerhalb sind die Information nicht zugänglich)
    for (
      let indexComments = 0;
      indexComments < books[indexBooks].comments.length;
      indexComments++
    ) {
      // in commentsAndNames stecken die Informationen des Objekts und der Arrays innerhalb des Objekts
      let commentsAndNames = books[indexBooks].comments[indexComments];
      tableRef.innerHTML += commentsAndNamesTemplate(commentsAndNames);
    }
  }
}

// Kommentar von Inputfeld auslesen und einfügen
function addComment(indexBooks) {
  // input weiß wo es stattfindet
  let input = document.getElementById(`comment-input${indexBooks}`);
  // .value weil es ein normaler Text ist
  let commentText = input.value;
  // nach books[usw].usw wird name und comment gepusht (und entsprechend ersetzt)
  books[indexBooks].comments.push({
    name: "Bücherwurm7",
    comment: commentText,
  });
  // Speicherung im localStorage (books-Objekt steckt im "allBooks")
  saveAllToLocalStorage();
  // tbodyRef weiß wo es stattfindet
  let tbodyRef = document.getElementById(`comment-table${indexBooks}`);
  // .innerHTML fügt (+=) hinzu
  tbodyRef.innerHTML += /*html*/ `<tr><td>Bücherwurm7</td><td>${commentText}</td></tr>`;
  // leert das Inputfeld danach
  input.value = "";
}

// Aufruf vom localStorage
function getAllFromLocalStorage() {
  let storedBooks = localStorage.getItem("allBooks");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
}

function saveAllToLocalStorage() {
  localStorage.setItem("allBooks", JSON.stringify(books));
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
  saveAllToLocalStorage();
  showLikedBooks();
}

// gibt das entsprechende Herz im html zurück
function showRightLike(indexBooks) {
  if (books[indexBooks].liked === true) {
    return { greenHeart: "", grayHeart: "d_none" };
  } else {
    return { greenHeart: "d_none", grayHeart: "" };
  }
}

// Mit toggle könnte man sich eine Funktion* sparen, aber das passt erstmal so
function greenHeart(indexBooks) {
  let green = document.getElementById("green-heart-img" + indexBooks);
  let gray = document.getElementById("gray-heart-img" + indexBooks);
  green.classList.add("d_none");
  gray.classList.remove("d_none");
  saveAllToLocalStorage();
}

// * (diese oder die obere)
function grayHeart(indexBooks) {
  let gray = document.getElementById("gray-heart-img" + indexBooks);
  let green = document.getElementById("green-heart-img" + indexBooks);
  gray.classList.add("d_none");
  green.classList.remove("d_none");
  saveAllToLocalStorage();
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

// gelikete Bücher anzeigen
// erfassen, wenn Bücher geliket wurden
// div für die Ausgabe erstellen (innerHTML)

function showLikedBooks() {
  let likedRef = document.getElementById("liked-books-container");
  likedRef.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    if (books[i].liked === true) {
      likedRef.innerHTML += /*html*/ `<p class="liked_books">${books[i].title}</p>`;
    }
  }
}
