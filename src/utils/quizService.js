import tokenService from "./tokenService";
const BASE_URL = "/api/quiz";

function index() {
  const options = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };
  return fetch("/api/mytrivias", options)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
}

function getOne(id) {
  return fetch(`${BASE_URL}${id}`)
    .then((res) => res.json())
    .catch((err) => console.log("err", err));
}

function create(quiz) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
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
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(quiz),
  };
  return fetch("/api/mytrivias/" + quiz._id, options).then((res) => res.json());
}

function deleteOne(id) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
  };
  return fetch("/api/mytrivias/" + id, options).then((res) => res.json());
}

export default {
  index,
  getOne,
  create,
  update,
  delete: deleteOne,
};
