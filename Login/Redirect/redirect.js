const code = new URL(window.location.href).searchParams.get('code');
const REST_API_KEY = '	91c58cdda4c980cc377e033eaada7996';
const REDIRECT_URI = 'http://127.0.0.1:5500/Login/Redirect/redirect.html';

function exchangeKakaoCodeForToken(access_token) {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  };
  axios({
    method: 'post',
    url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    headers: headers,
  }).then((response) => {
    const accessToken = response.data.access_token;
    window.localStorage.setItem('accessToken', accessToken);
  });
}

exchangeKakaoCodeForToken(code);

const token = window.localStorage.getItem('accessToken');

function exchangeJwtToken() {}
