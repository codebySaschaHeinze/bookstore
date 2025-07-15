function getBookTemplate(indexBooks, greenHeart, grayHeart) {
  return `
          <div class="book_wrapper">
            <div id="book-title" class="book_title">
              <p>${books[indexBooks].title}</p>
            </div>
            <div class="section_divider"></div>
            <div class="book_cover">
              <img src="${books[indexBooks].cover}" alt="" />
            </div>
            <div class="section_divider"></div>
            <div class="price_and_likes">
              <p class="price">${books[indexBooks].price
                .toString()
                .replace(".", ",")} €
              </p>
            <div class="likes_and_heart">
              <p id="likes${indexBooks}" class="likes">${
    books[indexBooks].likes
  }
              </p>
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
                  <input id="comment-input${indexBooks}" type="text" placeholder="Schreibe einen Kommentar"/>
                  <button onclick="addComment(${indexBooks})" class="send_button">
                    <img src="./assets/img/sendButton.png" alt="" />
                  </button>
              </div>
            </div>
          `;
}

function commentsAndNamesTemplate(commentsAndNames) {
  return `
            <tr> 
              <td class="comment_section_user_name">${commentsAndNames.name}:</td>
              <td class="comment_section_user_comment">${commentsAndNames.comment}</td>
            </tr>
          `;
}
