$(document).ready(function () {
  // Get the content ID from your desired source (for example, from URL parameters)
  // Replace with the actual content ID you want to display
  const urlParams = new URLSearchParams(window.location.search);
  const contentId = urlParams.get('id');

  axios({
    method: 'get',
    url: '../Mock/Community/CommunityDetail.json',
  }).then((response) => {
    const contents = response.data;
    console.log(response.data);

    //Find the content with the matching ID
    const selectedContent = contents.find((content) => content.id == contentId);

    console.log(selectedContent);

    if (contents) {
      // Get the elements
      const titleElement = document.querySelector('.title');
      const numElement = document.querySelector('.info #num');
      const writerElement = document.querySelector('.info #writer');
      const dateElement = document.querySelector('.info #created');
      //const countElement = document.querySelector('.info #viewNum');
      const contentElement = document.querySelector('.cont');

      // Populate the elements
      titleElement.textContent = selectedContent.title;
      numElement.textContent = selectedContent.id;
      writerElement.textContent = selectedContent.nickname;
      dateElement.textContent = selectedContent.created;
      // Assuming 'count' property exists in the content object
      //countElement.textContent = selectedContent.comment.length; // Update to appropriate property
      contentElement.innerHTML = selectedContent.content;

      // Create and populate images container
      const imagesContainer = document.createElement('div');
      imagesContainer.classList.add('images'); // Add appropriate class
      selectedContent.images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('img');
        imgElement.src = image.link;
        imagesContainer.appendChild(imgElement);
        console.log(imgElement);
      });
      document.querySelector('.board_view').appendChild(imagesContainer);

      const commentsContainer = document.createElement('div');
      commentsContainer.classList.add('images'); // Add appropriate class
      // Create and populate comments container
      document.querySelector('.board_view').appendChild(commentsContainer);
    } else {
      // Handle case when content is not found
      console.log('Content not found');
    }

    const comments = selectedContent.comment;
    console.log(comments);
    const commentView = document.querySelector('.comment_view');

    comments.forEach((comments) => {
      // Create elements
      const commentContainer = document.createElement('div');
      commentContainer.classList.add('comment_container');

      const writer = document.createElement('dd');
      writer.id = 'co_writer';
      writer.textContent = comments.nickname;

      const content = document.createElement('dd');
      content.id = 'co_cont';
      content.textContent = comments.content;

      const dl = document.createElement('dl');
      dl.appendChild(writer);
      dl.appendChild(content);

      commentContainer.appendChild(dl);
      commentView.appendChild(commentContainer);
    });
  });
});

function getComment() {
  const commentContent = document.getElementById('title').value;
  console.log(commentContent);

  // location.href = '../communityView.html';
  // console.log(location.href);

  $.ajax({
    type: 'POST',
    url: `/api/community/commnet/${id}`, // 요청할 서버url
    async: true, // 비동기화 여부 (default : true)
    headers: {
      // Http header
      'Content-Type': 'application/json',
      'X-HTTP-Method-Override': 'POST',
    },
    dataType: 'json', // 데이터 타입 (html, xml, json, text 등등)
    data: JSON.stringify({
      // 보낼 데이터 (Object , String, Array)
      content: commentContent,
    }),
    success: function (result) {
      // 결과 성공 콜백함수
      console.log(result);
    },
    error: function (request, status, error) {
      // 결과 에러 콜백함수
      console.log(error);
    },
  });
}
