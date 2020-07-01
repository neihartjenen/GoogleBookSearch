const router = require("express").Router();
const bookRoutes = require("./book.js");
const bookSearch = require("./search.js");


router.use("/books", bookRoutes);
router.use("/search", bookSearch);

module.exports = router;
