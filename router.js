const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up");
  res.header("Access-Control-Allow-Origin", "*");
});

module.exports = router;
