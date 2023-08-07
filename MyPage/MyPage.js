const logo = document.querySelector('.logo');
const backIcon = document.querySelector('.backIcon');

logo.addEventListener('click', () => {
  window.location.assign('http://172.30.40.223:5500/MyPage/MyPage.html');
});

backIcon.addEventListener('click', () => {
  history.go(-1);
});
