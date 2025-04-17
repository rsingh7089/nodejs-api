const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "This is a test API endpoint" });
});

module.exports = router;
