// Content rendern
function init() {
  renderall();
}

function renderBook1() {
  //   let bookRef = document.getElementById("content-container1");
  //   bookRef.innerHTML = "";
  for (let index = 0; index < books.name.length; index++) {
    bookRef.innerHTML += getContent(index);
  }
}
