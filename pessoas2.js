const fetch = require("node-fetch");

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((json) => {
    json.results.forEach((person) => {
      console.log("person", person);
    });
  });
