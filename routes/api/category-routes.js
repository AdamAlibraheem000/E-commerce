const router = require("express").Router();
const { Category, User } = require("../../models");

router.get("/", (req, res) => {
  // Return all categories
  //   Equivalent to SELECT * FROM category
  Category.findAll()
    .then((CategoryData) => res.json(CategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // Return one category
  Category.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((CategoryData) => {
      if (!CategoryData) {
        res.status(404).json({ message: "No category data by that id" });
        return;
      }

      res.json(CategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  })
    .then((CategoryData) => res.json(CategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((CategoryData) => {
      if (!CategoryData[0]) {
        res.status(404).json({ message: "no data found" });
        return;
      }

      res.json(CategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((CategoryData) => {
      if (!CategoryData) {
        res.status(404).json({ message: "No data found" });
        return;
      }
      res.json(CategoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
