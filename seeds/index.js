const seedCategories = require("./category-seeds");
const seedProduct = require("./product-seeds");
const seedTag = require("./tag-seeds");
const seedProductTag = require("./productTag-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedProduct();

  await seedTag();

  await seedProductTag();

  process.exit(0);
};

seedAll();
