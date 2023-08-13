// Default JS

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Main.html');
});

// Login

const login = document.querySelector('.login');
login.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Login/login.html');
});
