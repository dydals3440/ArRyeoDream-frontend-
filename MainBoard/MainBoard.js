function AllLecture(){
    $.ajax({
        type: 'GET',
        url: `../Mock/MyPage/AllLecture.json`,
  }).then(response => {
    const classWrapper = document.querySelector('.classWrapper');
    const lectures = response.content[0].content;
    lectures.forEach((lecture) => {
        console.log(lecture)
        // classInfo(div) (1)
    const classElement = document.createElement('div');
    classElement.classList.add('classInfo');
    // classImg (2)
    const imgElement = document.createElement('img');
    imgElement.classList.add('classImg');
    imgElement.src = lecture.image;
    imgElement.alt = `${lecture.title} 이미지`;
    // classDes (2)
    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('classDescription');
    // classTitle(3)
    const titleElement = document.createElement('h1');
    titleElement.classList.add('classTitle');
    titleElement.textContent = lecture.title;
    // subDes(3)
    const subDescriptionElement = document.createElement('div');
    subDescriptionElement.classList.add('classSubDescription');
    // region(4)
    const regionElement = document.createElement('p');
    regionElement.classList.add('classRegion');
    regionElement.textContent = lecture.region;
    // mentorName(4)
    const mentorNameElement = document.createElement('p');
    mentorNameElement.classList.add('classMentorName');
    mentorNameElement.textContent = lecture.author + ' 멘토';
    // 4,3,2,1 역순 append
    subDescriptionElement.appendChild(regionElement);
    subDescriptionElement.appendChild(mentorNameElement);

    descriptionElement.appendChild(titleElement);
    descriptionElement.appendChild(subDescriptionElement);

    classElement.appendChild(imgElement);
    classElement.appendChild(descriptionElement);
    classWrapper.appendChild(classElement);
    console.log(classWrapper);

    //click하면 강좌신청으로 넘어가기
    })
    })
}
AllLecture()