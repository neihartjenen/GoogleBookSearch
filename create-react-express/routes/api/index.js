const router = require("express").Router();
const bookRoutes = require("./book.js");
const googleBook = require("./googlebook.js");


router.use("/books", bookRoutes);
router.use("/googlebook", googleBook);

module.exports = router;
