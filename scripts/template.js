// function getContent(index) {
//   let inputRef = document.getElementById("content-container");
//   return /*html*/ `
//         <div id="book-title" class="book_title"></div>
//         <div id="book-cover" class="book_cover"></div>
//         <div id="book-infos" class="book_infos"></div>
//         <div id="book-commentaries" class="book_commentaries"></div>
//         <div id="commentarie-input" class="commentarie_input">
//         <input type="text" /></div>`;
// }

function getBookTemplate(indexBooks) {
  return `<div id="book-title" class="book_title">
        <p>${books[indexBooks].title}</p>
      </div>
      <div class="section_divider"></div>
      <div class="book_cover">
        <img src="./assets/img/book.png" alt="" />
      </div>
      <div class="section_divider"></div>
      <div class="price_and_likes">
        <p class="price">${books[indexBooks].price}</p>
        <div class="likes_and_heart">
          <p class="likes">${books[indexBooks].likes}</p>
          <button class="heart_button">
            <img src="./assets/img/heart_green.png" alt="" />
          </button>
        </div>
      </div>
      <div class="section_divider"></div>
      <div class="book_infos">
        <div class="book_info_left">
          <p>Autor:</p>
          <p>Veröffentlichung:</p>
          <p>Genre:</p>
        </div>
        <div class="book_info_right">
          <p>${books[indexBooks].author}</p>
          <p><p>${books[indexBooks].publishedYear}</p></p>
          <p><p>${books[indexBooks].genre}</p></p>
        </div>
      </div>
      <div class="section_divider"></div>
      <div class="book_comment_headline">
        <p>Kommentare:</p></div>
        <div class="comment_section_user_names"
        ></div>
        <div class="comment_section_user_comment"
        ></div>
      </div>
      <div class="comment_input">
        <input type="text" />
        <button class="send_button">
          <img src="./assets/img/sendButton.png" alt="" />
        </button>
      </div>`;
}
