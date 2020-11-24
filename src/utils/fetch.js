const fetch = require("node-fetch");

const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

module.exports = {
  fetchData,
};
