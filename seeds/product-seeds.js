const { Product } = require("../models");

const productData = [
  {
    id: 1,
    product_name: "Pants",
    price: 35.0,
    stock: 12,
    category_id: 1,
  },
  {
    id: 2,
    product_name: "Shirts",
    price: 17.0,
    stock: 7,
    category_id: 1,
  },
  {
    id: 3,
    product_name: "Dresses",
    price: 35.0,
    stock: 12,
    category_id: 2,
  },
  {
    id: 4,
    product_name: "Blouses",
    price: 47.0,
    stock: 6,
    category_id: 2,
  },
  {
    id: 5,
    product_name: "Shoes-boys",
    price: 15.0,
    stock: 3,
    category_id: 3,
  },
  {
    id: 6,
    product_name: "Shoes-girls",
    price: 14.0,
    stock: 5,
    category_id: 4,
  },
  {
    id: 7,
    product_name: "Pacifiers",
    price: 16.0,
    stock: 12,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
