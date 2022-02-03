const router = require("express").Router();
const { ProductTag } = require("../../models");

router.get("/", (req, res) => {
  // Return all product tags
  ProductTag.findAll()
    .then((ProductTagData) => res.json(ProductTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // Return one ProductTag
  ProductTag.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((ProductTagData) => {
      if (!ProductTagData) {
        res.status(404).json({ message: "No ProductTag data by that id" });
        return;
      }

      res.json(ProductTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  ProductTag.create({
    product_id: req.body.product_id,
    tag_id: req.body.tag_id,
  })
    .then((ProductTagData) => res.json(ProductTagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  ProductTag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((ProductTagData) => {
      if (!ProductTagData[0]) {
        res.status(404).json({ message: "no data found" });
        return;
      }

      res.json(ProductTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  ProductTag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((ProductTagData) => {
      if (!ProductTagData) {
        res.status(404).json({ message: "No data found" });
        return;
      }
      res.json(ProductTagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
