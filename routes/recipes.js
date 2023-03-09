var express = require("express");
var router = express.Router();

require("../models/connection");
const Recipe = require("../models/recipes");
// const User = require("../models/users");

router.get("/", (req, res) => {
  Recipe.find().then((recipesData) => {
    res.json({ recipesData });
  });
});

router.post("/", (req, res) => {
  Recipe.findOne({ title: req.body.title }).then((data) => {
    if (data === null) {
      const newRecipe = new Recipe({
        title: req.body.title,
        image: req.body.image,
        liked: false,
      });
      newRecipe.save().then((newDoc) => {
        res.json({ result: true, recipe: newDoc.recipe });
      });
    } else {
      res.json({ result: false, error: "Already posted" });
    }
  });
});

router.patch("/:id", (req, res) => {
  Recipe.findById(req.params.id).then((recipe) => {
    if (recipe.liked) {
      Recipe.updateOne({ _id: recipe._id }, { liked: !recipe.liked }).then(
        () => {
          res.json({ result: true, liked: false });
        }
      );
    } else {
      Recipe.updateOne({ _id: recipe._id }, { liked: !recipe.liked }).then(
        () => {
          res.json({ result: true, liked: true });
        }
      );
    }
  });
});

module.exports = router;
