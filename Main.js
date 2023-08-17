// Default JS
const logo = document.querySelector('.logo');
const loginContainer = document.querySelector('.loginContainer');

logo.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Main.html');
});

// Login

const login = document.querySelector('.login');
login.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Login/login.html');
});

// 로그인 성공시, 로그인 버튼을 => 로그인 유저 닉네임으로 변경
const token = localStorage.getItem('accessToken');
const nickname = localStorage.getItem('nickname');

if (token) {
  loginContainer.innerHTML = `<a href='http://127.0.0.1:5500/MyPage/MyPage.html'> ${nickname} 님</a>`;
} else {
  loginContainer.innerHTML = `<a href='http://127.0.0.1:5500/Login/login.html' class='login'>로그인</a>`;
}
