const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "This is a test API endpoint" });
});

router.get("/one-more-test", (req, res) => {
  res.json({ message: "This is a one-more-test API endpoint" });
});

module.exports = router;
