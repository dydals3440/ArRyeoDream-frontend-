const code = new URL(window.location.href).searchParams.get('code');
const REST_API_KEY = '91c58cdda4c980cc377e033eaada7996';
const REDIRECT_URI = 'http://127.0.0.1:5500/Login/Redirect/redirect.html';

function exchangeKakaoCodeForToken(access_token) {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  };
  axios({
    method: 'post',
    url: `/api/auth/kakao`,
    headers: headers,
  })
    .then((response) => {
      console.log(response);
      const accessToken = response.jwt.accessToken;
      window.localStorage.setItem('accessToken', accessToken);

      const refreshToken = response.jwt.refreshToken;
      window.localStorage.setItem('refreshToken', refreshToken);
      // 로그인 성공 후 메인페이지 이동
      window.location.assign(
        'https://aesthetic-rabanadas-d6196b.netlify.app/Main.html'
      );
    })
    .catch((err) => alert(err.message));
}

//kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}

exchangeKakaoCodeForToken(code);

const token = window.localStorage.getItem('accessToken');

// JWT 토큰을 이용해서 파싱하여, 닉네임을 가져온 후, 로컬스토리지에 저장.
const decode = (token) =>
  decodeURIComponent(
    atob(token.split('.')[1].replace('-', '+').replace('_', '/'))
      .split('')
      .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
      .join('')
  );

const decodedData = decode(token);
const parsedData = JSON.parse(decodedData);

const nickname = parsedData.nickname;

localStorage.setItem('nickname', nickname);

console.log('Name:', nickname);
