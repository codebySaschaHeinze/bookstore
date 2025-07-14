function init() {
  getBooks();
  // console.log(books);
}

// books in forSchleife (indexBooks beinhaltet alle Informationen von books (bg.js))
function getBooks() {
  // bookRef weiß, wo es stattfindet
  let bookRef = document.getElementById("content-container");
  // entsprechenden Container leeren
  bookRef.innerHTML = "";
  // forSchleife für indexBooks (Informationssammlung)
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    // bookRef mit Verweis wohin genau, nimmt die getBookTemplate(indexBooks) mitsamt dem indexBooks
    bookRef.innerHTML += getBookTemplate(indexBooks);

    let tableRef = document.getElementById("comment-table" + indexBooks);
    // Innerhalb des books-Objekts stecken Arrays, die dann auch innerhalb der forSchleife gezählt werden müssen (Außerhalb sind die Information nicht zugänglich)
    for (
      let indexComments = 0;
      indexComments < books[indexBooks].comments.length;
      indexComments++
    ) {
      // in commentsAndNames stecken die Informationen des Objekts und der Arrays innerhalb des Objekts
      let commentsAndNames = books[indexBooks].comments[indexComments];
      tableRef.innerHTML += `
                              <tr> <td class="comment_section_user_name">${commentsAndNames.name}:</td>
                                   <td class="comment_section_user_comment">${commentsAndNames.comment}</td>
                              <tr>
                            `;
    }
  }
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

function getComment(indexBooks) {
  let input = document.getElementById(`comment-input${indexBooks}`);
  let commentText = input.value;
  books[indexBooks].comments.push({
    name: "Bücherwurm7",
    comment: commentText,
  });
  let tbodyRef = document.getElementById(`comment-table${indexBooks}`);
  tbodyRef.innerHTML += /*html*/ `<tr><td>Bücherwurm7</td><td>${commentText}</td></tr>`;
  input.value = "";
}
