const express = require("express");
const {
  fetchAllStudents,
  fetchAllStudentsWithScores,
  fetchAllStudentsCurrentScore,
} = require("../controllers/studentController");

const router = express.Router();
router.get("/", fetchAllStudents);
router.get("/scores", fetchAllStudentsWithScores);
router.get("/scores/current", fetchAllStudentsCurrentScore);

module.exports = router;
