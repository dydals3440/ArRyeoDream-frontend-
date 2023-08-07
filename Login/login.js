const kakaoLoginBtn = document.querySelector('.kakaoLoginBtn');

// Click Logo to Main
const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  window.location.assign('http://172.30.1.76:5500/Main.html');
});

//  KAKAO LOGIN
kakaoLoginBtn.addEventListener('click', () => {
  console.log('카카오버튼 클릭');
  kakaoLogin();
});

window.Kakao.init('2bf73d0da371aadf90102e2d764fb07c');

// 추후에 Access token을 백엔드에게 전달해주어야함
function kakaoLogin() {
  window.Kakao.Auth.login({
    scope:
      'profile_nickname, 	profile_image, account_email, gender, age_range, friends, story_permalink',
    success: function (response) {
      // 토큰 정보
      console.log(response);
      window.localStorage.setItem('token', response.access_token);
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          // 카카오 유저 정보
          const kakao_account = res.kakao_account;
          console.log(kakao_account);
        },
      });
      //   window.location.href = 'http://172.30.40.223:5500/MyPage/MyPage.html'; //리다이렉트 되는 코드
    },
    fail: function (error) {
      console.log(`${error} 로그인을 시도하는 과정 중에 에러가 발생했습니다.`);
    },
  });
}

// KAKAO LOGOUT
function kakaoLogout() {
  if (!Kakao.Auth.getAccessToken()) {
    console.log('Not logged in.');
    return;
  }
  Kakao.Auth.logout(function (response) {
    alert(response + ' logout');
    window.location.href = '/';
  });
}
