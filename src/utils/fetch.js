const fetch = require("node-fetch");

//For util function for fetching data
const fetch_data = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

module.exports = {
  fetch_data,
};
