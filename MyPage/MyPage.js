const logo = document.querySelector('.logo');
const backIcon = document.querySelector('.backIcon');

logo.addEventListener('click', () => {
  window.location.assign('http://127.0.0.1:5500/Main.html');
});

backIcon.addEventListener('click', () => {
  history.go(-1);
});

// 나의 강좌 MockData 연결
axios({
  method: 'get',
  url: '../Mock/MyPage/MyLecture',
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
  });
});
