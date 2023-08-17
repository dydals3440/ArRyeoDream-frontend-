const kakaoLoginBtn = document.querySelector('.kakaoLoginBtn');

// Click Logo to Main
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Main.html');
});

//  KAKAO LOGIN
const REST_API_KEY = '	91c58cdda4c980cc377e033eaada7996';
const REDIRECT_URI = 'http://127.0.0.1:5500/Login/Redirect/redirect.html';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

kakaoLoginBtn.addEventListener('click', (e) => {
  console.log('카카오버튼 클릭');
  window.location.assign(KAKAO_AUTH_URL);
});

window.Kakao.init('2bf73d0da371aadf90102e2d764fb07c');
