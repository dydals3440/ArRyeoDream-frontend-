let totalData; //총 데이터 수
let dataPerPage; //한 페이지에 나타낼 글 수
let pageCount = 10; //페이징에 나타낼 페이지 수
let globalCurrentPage=1; //현재 페이지
let dataList; //표시하려하는 데이터 리스트

$(document).ready(function () {
  // dataPerPage 선택값 가져오기
  dataPerPage = $("#dataPerPage").val();

  axios({
    method: 'get',
    url: '../Mock/Community/AllCommunity.json',
  }).then((response) => {
    const contents = response.data.content;
    const boardList = document.querySelector('.board_list');

    contents.forEach((content) => {
      const item = document.createElement('div');
      item.classList.add('item');

      const num = document.createElement('div');
      num.classList.add('num');
      num.textContent = content.id;

      const title = document.createElement('div');
      title.classList.add('title');
      const titleLink = document.createElement('a');
      titleLink.href = `../communityView/index.html?id=${content.id}`;
      console.log(titleLink.href);
      titleLink.textContent = content.title;
      title.appendChild(titleLink);

      const writer = document.createElement('div');
      writer.classList.add('writer');
      writer.textContent = content.nickname;

      const date = document.createElement('div');
      date.classList.add('date');
      date.textContent = content.created;


      item.appendChild(num);
      item.appendChild(title);
      item.appendChild(writer);
      item.appendChild(date);

      boardList.appendChild(item);
    });
  });
});


 //     communityInfo.addEventListener('click', () => {
 //       localStorage.setItem('id',numberElement);
 //       console.log(numberElement);
  //    });



//현재 페이지(currentPage)와 페이지당 글 개수(dataPerPage) 반영
  function displayData(currentPage, dataPerPage) {

    let chartHtml = "";

//Number로 변환하지 않으면 아래에서 +를 할 경우 스트링 결합이 되어버림..
    currentPage = Number(currentPage);
    dataPerPage = Number(dataPerPage);

    for (
      var i = (currentPage - 1) * dataPerPage;
      i < (currentPage - 1) * dataPerPage + dataPerPage;
      i++
    ) {
      chartHtml +=
        "<tr><td>" +
        dataList[i].d1 +
        "</td><td>" +
        dataList[i].d2 +
        "</td><td>" +
        dataList[i].d3 +
        "</td></tr>";
    } //dataList는 임의의 데이터임.. 각 소스에 맞게 변수를 넣어주면 됨...
    $("#dataTableBody").html(chartHtml);
  }


