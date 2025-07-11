// Content rendern

function renderBook1() {
  let bookRef = document.getElementById("content-container1");
  bookRef.innerHTML = "";
  for (let index = 0; index < books.length; index++) {
    bookRef.innerHTML += getContent(index);
  }
}

// Container grob strukturieren
