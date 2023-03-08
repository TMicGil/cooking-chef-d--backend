var express = require("express");
var router = express.Router();

require("../models/connection");
const Recipe = require("../models/recipes");
// const User = require("../models/users");

router.get("/all", (req, res) => {
  Recipe.find().then((recipesData) => {
    res.json({ recipesData });
  });
});

router.post("/new", (req, res) => {
  Recipe.findOne({ title: req.body.title }).then((data) => {
    if (data === null) {
      const newRecipe = new Recipe({
        title: req.body.title,
        image: req.body.image,
      });
      newRecipe.save().then((newDoc) => {
        res.json({ result: true, recipe: newDoc.recipe });
      });
    } else {
      res.json({ result: false, error: "Already posted" });
    }
  });
});

module.exports = router;
