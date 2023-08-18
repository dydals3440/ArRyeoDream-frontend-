$(document).ready(function () {
  $('.bt_wrap.on').click(getMemberList);
});

function getMemberList() {
  const postTitle = document.getElementById('title').value;
  const postContent = document.getElementById('cont').value;
  console.log(postTitle);
  console.log(postContent);
  var formData = new Array();
  const images = $('.img-upload')[0].files;
  for (let i = 0; i < images.length; i++) {
    let image = URL.createObjectURL(images[0]);
    console.log(images);
    formData.push(image);
  }
  console.log(formData);

  $.ajax({
    type: 'POST',
    url: '/api/community/board', // 요청할 서버url
    async: true, // 비동기화 여부 (default : true)
    headers: {
      // Http header
      'Content-Type': 'application/json',
      'X-HTTP-Method-Override': 'POST',
    },
    dataType: 'json', // 데이터 타입 (html, xml, json, text 등등)
    data: JSON.stringify({
      // 보낼 데이터 (Object , String, Array)
      title: postTitle,
      content: postContent,
      images: formData,
    }),
    success: function (result) {
      // 결과 성공 콜백함수
      console.log(result);
      window.location.href =
        'https://aesthetic-rabanadas-d6196b.netlify.app/communityList';
    },
    error: function (request, status, error) {
      // 결과 에러 콜백함수
      console.log(error);
      window.location.href =
        'https://aesthetic-rabanadas-d6196b.netlify.app/communityList';
    },
  });
}
