const { Category } = require("../models");

const categoryData = [
  {
    id: 1,
    category_name: "Mens",
  },
  {
    id: 2,
    category_name: "Womens",
  },
  {
    id: 3,
    category_name: "Boys",
  },
  {
    id: 4,
    category_name: "Girls",
  },
  {
    id: 5,
    category_name: "Kids",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
