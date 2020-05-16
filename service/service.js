const axios = require('axios');
const url = "https://news.ycombinator.com/";

module.exports = getInformation =() => {
    return axios.get(url)
    .then((res) => res)
    .catch((err) => console.log(err));
};