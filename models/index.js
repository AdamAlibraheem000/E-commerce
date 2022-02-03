const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Associations
Category.hasMany(Product, {
  foreignKey: "id",
});

Product.belongsTo(Category, {
  foreignKey: "id",
});

module.exports = { Category, Product, Tag, ProductTag };
