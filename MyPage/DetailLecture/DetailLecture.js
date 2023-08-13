const logo = document.querySelector('.logo');
const backIcon = document.querySelector('.backIcon');

logo.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Main.html');
});

backIcon.addEventListener('click', () => {
  history.go(-1);
});
