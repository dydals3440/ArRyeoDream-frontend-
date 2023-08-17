const backIcon = document.querySelector('.backIcon');
console.log(backIcon);

backIcon.addEventListener('click', () => {
  history.go(-1);
});
