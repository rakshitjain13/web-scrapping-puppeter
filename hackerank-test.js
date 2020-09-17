const axios = require("axios");
axios
  .get("https://www.hackerrank.com/rakshitdhoka13")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));
