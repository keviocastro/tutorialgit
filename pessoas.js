const fetch = require("node-fetch");

fetch("https://randomuser.me/api/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((json) => console.log("json de pessoas 123 132132", json));
