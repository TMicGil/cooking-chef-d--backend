const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: String,
  image: String,
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
