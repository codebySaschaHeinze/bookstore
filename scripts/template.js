function getContent(index) {
  let inputRef = document.getElementById("content-container");
  return /*html*/ `
        <div id="book-title" class="book_title"></div>
        <div id="book-cover" class="book_cover"></div>
        <div id="book-infos" class="book_infos"></div>
        <div id="book-commentaries" class="book_commentaries"></div>
        <div id="commentarie-input" class="commentarie_input">
        <input type="text" /></div>`;
}
