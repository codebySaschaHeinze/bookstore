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
  let greenHeart = "";
  let grayHeart = "";

  if (books[indexBooks].liked === true) {
    grayHeart = "d_none";
  } else {
    greenHeart = "d_none";
  }

  return `
  <div class="book_wrapper">
    <div id="book-title" class="book_title">
      <p>${books[indexBooks].title}</p>
    </div>
      <div class="section_divider"></div>
    <div class="book_cover">
      <img src="./assets/img/book.png" alt="" />
     </div>
      <div class="section_divider"></div>
    <div class="price_and_likes">
      <p class="price">${books[indexBooks].price} €</p>
        <div class="likes_and_heart">
          <p id="likes${indexBooks}" class="likes">${books[indexBooks].likes}</p>
          <button onclick="changeLiked(${indexBooks})" class="heart_button">
            <img
              class="green_heart_img ${greenHeart}"
              id="green-heart-img${indexBooks}"
              src="./assets/img/heart_green.png"
              alt=""
            />
            <img
              class="gray_heart_img ${grayHeart}"
              id="gray-heart-img${indexBooks}"
              src="./assets/img/heart_gray.png"
              alt=""
            />
          </button>
        </div>
        </div>
        <div class="section_divider"></div>
        <div class="book_infos">
          <div class="book_info_left">
          <p>Autor:</p>
          <p>Genre:</p>
          <p>Veröffentlichung:</p>
        </div>    
        <div class="book_info_right">
          <p>${books[indexBooks].author}</p>
          <p>${books[indexBooks].genre}</p>
          <p>${books[indexBooks].publishedYear}</p>
        </div>
      </div>
      <div class="section_divider"></div>
      <div class="book_comment_headline">
        <p>Kommentare:</p>
      </div>
      <div class="comment_container">
        <table class="comment_table">
          <tbody id="comment-table${indexBooks}"></tbody>
        </table>
      </div>
      <div class="comment_input">
        <input id="comment-input${indexBooks}" type="text" />
            <button onclick="addComment(${indexBooks})" class="send_button">
              <img src="./assets/img/sendButton.png" alt="" />
            </button>
        </div>
  </div>
`;
}
