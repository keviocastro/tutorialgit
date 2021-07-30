const fetch = require("node-fetch");

fetch("https://randomuser.me/api/", {
  method: "GET",
})
  .then((res) => res.json())
  .then((json) => console.log("Response persons changed test", json));
