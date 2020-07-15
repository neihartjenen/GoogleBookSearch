  
const router = require("express").Router();
const axios = require("axios");

router.route("/").get((req, res) => {
  console.log(req.query.q);
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.query.q}`)
    .then(({ data: { items } }) => {
      res.json(items);
    })
    .catch((err) => console.log(err));
});

module.exports = router