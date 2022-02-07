const studentService = require("../services/studentServices");

exports.fetchAllStudents = async (req, res, next) => {
  const students = await studentService.fetchAllStudents();
  res.json(students).status(200);
};

exports.fetchAllStudentsWithScores = async (req, res, next) => {
  const students = await studentService.fetchAllStudentsWithScores();
  res.json(students).status(200);
};

exports.fetchAllStudentsCurrentScore = async (req, res, next) => {
  const students = await studentService.fetchAllStudentsCurrentScore();
  res.json(students).status(200);
};
