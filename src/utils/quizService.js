import tokenService from "./tokenService";

const BASE_URL = "/api/create/";

function index() {
  return fetch(BASE_URL)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
}

function getOne(id) {
  return fetch(`${BASE_URL}${id}`)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
}

function create(quiz) {
  console.log(quiz);
  const options = {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(quiz),
  };
  return fetch(BASE_URL, options).then((res) => res.json());
}

function update(quiz) {
  console.log(quiz);
  const options = {
    method: "PUT",
    headers: {
      'Content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(quiz),
  };
  return fetch(BASE_URL + quiz._id, options).then((res) => res.json());
}

function deleteOne(id) {
  const options = {
    method: "DELETE",
    headers: {
      'Content-type': 'application/json',
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };
  return fetch(BASE_URL + id, options).then((res) => res.json());
}

export default {
  index,
  getOne,
  create,
  update,
  delete: deleteOne,
};