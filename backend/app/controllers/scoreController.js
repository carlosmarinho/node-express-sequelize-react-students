const scoreService = require("../services/scoreServices");

exports.fetchAllScores = async (req, res, next) => {
  const scores = await scoreService.fetchAllScores();
  res.json(scores).status(200);
};

exports.saveScore = async (req, res, next) => {
  const updated = await scoreService.saveScore(req.params.id, req.body);
  if (updated) res.json({ message: "Score updated successfully!" }).status(200);

  res.json({ message: "Error updating the score!" }).status(204);
};