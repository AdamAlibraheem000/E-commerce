const router = require("express").Router();
const { Product } = require("../../models");

router.get("/", (req, res) => {
  // Return all Products
  Product.findAll()
    .then((ProductData) => res.json(ProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // Return one Product
  Product.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((ProductData) => {
      if (!ProductData) {
        res.status(404).json({ message: "No product data by that id" });
        return;
      }

      res.json(ProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id,
  })
    .then((ProductData) => res.json(ProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((ProductData) => {
      if (!ProductData[0]) {
        res.status(404).json({ message: "no data found" });
        return;
      }

      res.json(ProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((ProductData) => {
      if (!ProductData) {
        res.status(404).json({ message: "No data found" });
        return;
      }
      res.json(ProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
