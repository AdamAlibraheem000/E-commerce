const router = require("express").Router();
const { Tag } = require("../../models");

router.get("/", (req, res) => {
  // Return all Tag
  Tag.findAll()
    .then((TagData) => res.json(TagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // Return one tag
  Tag.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((TagData) => {
      if (!TagData) {
        res.status(404).json({ message: "No tag data by that id" });
        return;
      }

      res.json(TagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((TagData) => res.json(TagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((TagData) => {
      if (!TagData[0]) {
        res.status(404).json({ message: "no data found" });
        return;
      }

      res.json(TagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((TagData) => {
      if (!TagData) {
        res.status(404).json({ message: "No data found" });
        return;
      }
      res.json(TagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
