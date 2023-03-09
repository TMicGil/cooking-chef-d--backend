const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: String,
  image: String,
  liked: Boolean,
});

const Recipe = mongoose.model("recipes", recipeSchema);

module.exports = Recipe;
