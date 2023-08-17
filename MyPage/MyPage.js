const logo = document.querySelector('.logo');
const backIcon = document.querySelector('.backIcon');
const memberCancelBtn = document.querySelector('.membershipCancel__btn');

logo.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Main.html');
});

backIcon.addEventListener('click', () => {
  history.go(-1);
});

// 로그인 로직
function hasToken() {
  return localStorage.getItem('token') !== null;
}

// 로그아웃
function logout() {
  console.log('로그아웃');
  localStorage.removeItem('token');
  updateLoginStatus();
}

function login() {
  console.log('로그인');
  // 카카오 로그인 페이지로 이동
  window.location.assign('http://127.0.0.1:5500/Login/login.html');
  updateLoginStatus();
}

function updateLoginStatus() {
  const loginContainer = document.querySelector('.myPageContainer');
  const logoutButton = document.querySelector('.logout');
  // hasToken 괄호 없이 사용하면, 함수의 존재 여부를 확인
  // hasToken() 하면, 함수의 반환값을 확인
  if (hasToken()) {
    logoutButton.innerHTML =
      '<p>로그아웃</p><img src="../img/Logout.png" alt="로그아웃 이미지" />';
    logoutButton.removeEventListener('click', login);
    logoutButton.addEventListener('click', logout);
  } else {
    logoutButton.innerHTML =
      '<p>로그인</p><img src="../img/Logout.png" alt="로그인 이미지" />';
    logoutButton.removeEventListener('click', logout);
    logoutButton.addEventListener('click', login);
  }
}
// 페이지 로드될떄 바로 확인
updateLoginStatus();

// 나의 강좌 MockData 연결
axios({
  method: 'get',
  url: '../Mock/MyPage/MyLecture.json',
}).then((response) => {
  const classWrapper = document.querySelector('.classWrapper');
  const classData = response.data.content;

  classData.forEach((classInfo) => {
    // classInfo(div) (1)
    const classElement = document.createElement('div');
    classElement.classList.add('classInfo');
    // classImg (2)
    const imgElement = document.createElement('img');
    imgElement.classList.add('classImg');
    imgElement.src = classInfo.image;
    imgElement.alt = `${classInfo.title} 이미지`;
    // classDes (2)
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('classDescription');
    // classTitle(3)
    const titleElement = document.createElement('h1');
    titleElement.classList.add('classTitle');
    titleElement.textContent = classInfo.title;
    // subDes(3)
    const subDescriptionElement = document.createElement('div');
    subDescriptionElement.classList.add('classSubDescription');
    // region(4)
    const regionElement = document.createElement('p');
    regionElement.classList.add('classRegion');
    regionElement.textContent = classInfo.region;
    // mentorName(4)
    const mentorNameElement = document.createElement('p');
    mentorNameElement.classList.add('classMentorName');
    mentorNameElement.textContent = classInfo.author + ' 멘토';
    // 4,3,2,1 역순 append
    subDescriptionElement.appendChild(regionElement);
    subDescriptionElement.appendChild(mentorNameElement);

    descriptionElement.appendChild(titleElement);
    descriptionElement.appendChild(subDescriptionElement);

    classElement.appendChild(imgElement);
    classElement.appendChild(descriptionElement);
    classWrapper.appendChild(classElement);

    classElement.addEventListener('click', () => {
      showClassDetails(classInfo.id);
      showClassAttendee(classInfo.id);
      classWrapper.innerHTML = '';
      console.log(classWrapper);
    });
  });
});

// 세부 페이지 내용 보여주기
function showClassDetails(classId) {
  axios({
    method: 'get',
    url: `../Mock/MyPage/DetailLecture.json`,
  }).then((response) => {
    console.log(response);
    const classDetails = response.data;
    console.log(classDetails);
  });
}

function showClassAttendee(classId) {
  axios({
    method: 'get',
    url: `../Mock/MyPage/DetailLectureAttendee.json`,
  }).then((response) => {
    const classAttendee = response.data.attendee;
    console.log(classAttendee);

    const attendeeContainer = document.createElement('div');
    attendeeContainer.classList.add('attendeeContainer');

    const modifyContainer = document.createElement('div');
    modifyContainer.classList.add('modifyContainer');

    classAttendee.forEach((attendee) => {
      // 유저 이름, 전화번호
      const attendeeBox = document.createElement('div');
      attendeeBox.classList.add('attendeeBox');

      const attendeeBox__name = document.createElement('p');
      attendeeBox__name.textContent = attendee.name;

      const attendeeBox__phone = document.createElement('p');
      attendeeBox__phone.textContent = attendee.phone;

      attendeeBox.appendChild(attendeeBox__name);
      attendeeBox.appendChild(attendeeBox__phone);

      attendeeContainer.appendChild(attendeeBox);
    });
    // 수정하기 버튼
    const modifyButton = document.createElement('button');
    modifyButton.classList.add('modifyWrapper__btn');
    modifyButton.textContent = '수정하기';
    console.log(modifyButton);
    modifyContainer.appendChild(modifyButton);

    const attendeeWrapper = document.querySelector('.attendeeWrapper');
    attendeeWrapper.appendChild(modifyContainer);
    attendeeWrapper.appendChild(attendeeContainer);
    // console.log(attendeeWrapper)
  });
}

// 회원 탈퇴하기 버튼
function cancelMembership() {
  const token = localStorage.getItem('token');
  axios({
    method: 'delete',
    url: 'URL',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      alert('회원 탈퇴가 정상적으로 되었습니다.');
    })
    .catch((error) => {
      alert('에레 발생');
    });
}

memberCancelBtn.addEventListener('click', () => {
  console.log('멤버십 삭제');
  cancelMembership();
});

// 수정하기
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modifyWrapper__btn')) {
    console.log('수정');
    const token = localStorage.getItem('token');
    // 수정을 원하는 강좌의 id
    // 다른 api로 부터 받아오기
    const courseId = 123;
    // 동적으로 받기 input
    const requestData = {
      title: '키오스크 편하게 익히기',
      intro: '김가은 멘토의 초보 키오스크 조작을 배워보세요',
      region: '[서울, 종로]',
      week: "['Wed', 'Thu']",
      images: ['이미지 링크1', '이미지 링크2'],
    };

    axios({
      method: 'put',
      url: `http://localhost:8080/board/${courseId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: requestData,
    })
      .then((response) => {
        console.log('강좌 수정 완료:', response.data);
      })
      .catch((error) => {
        console.error('강좌 수정 실패:', error);
      });
  }
});
