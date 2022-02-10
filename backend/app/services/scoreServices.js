const { Score } = require("../models/");
exports.fetchAllScores = async () => {
  try {
    return await Score.findAll();
  } catch (e) {
    // console.log("\n\n***\n errr score: ", e, "\n***\n");
  }
};

exports.saveScore = async (id, data) => {
  try {
    const response = await Score.update(data.score, { where: { id } });
    return response;
  } catch (e) {
    // console.log("\n\n***\n errr updating: ", e, "\n***\n");
  }
};