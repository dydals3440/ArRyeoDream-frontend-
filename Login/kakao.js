// 추후에 Access token을 백엔드에게 전달해주어야함
function kakaoLogin() {
  window.Kakao.Auth.login({
    scope:
      'profile_nickname, 	profile_image, account_email, gender, age_range, friends, story_permalink',
    success: function (authObj) {
      // 토큰 정보
      console.log(authObj);
      window.localStorage.setItem('token', response.access_token);
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          // 카카오 유저 정보
          const kakao_account = res.kakao_account;
          console.log(kakao_account);
        },
      });
      //   window.location.href = 'http://127.0.0.1:5500/MyPage/MyPage.html'; //리다이렉트 되는 코드
    },
    fail: function (error) {
      console.log(`${error} 로그인을 시도하는 과정 중에 에러가 발생했습니다.`);
    },
  });
}

// 카카오 Access Token => BackEnd

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
