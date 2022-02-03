const Category = require("./Category");
const Product = require("./Product");

// Associations
Category.hasMany(Product, {
  foreignKey: "id",
});

Product.belongsTo(Category, {
  foreignKey: "id",
});

module.exports = { Category, Product };
