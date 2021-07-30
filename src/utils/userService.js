import tokenService from "./tokenService";

const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  .then(({token}) => {
    tokenService.setToken(token)
  });
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout(){
  localStorage.removeItem('token')
}

async function login(creds){

  const options = {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  }

const data = await fetch(`${BASE_URL}login`, options)

let res;

if(data.ok){
    res = await data.json()
    return tokenService.setToken(res.token)
}

  throw new Error('Bad Credentials')
}

export default {
  signup,
  getUser,
  logout,
  login,
};