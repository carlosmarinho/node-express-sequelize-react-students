const express = require("express");
const { fetchAllScores, saveScore } = require("../controllers/scoreController");

const router = express.Router();

router.get("/", fetchAllScores);
router.put("/:id", saveScore);


module.exports = router;
