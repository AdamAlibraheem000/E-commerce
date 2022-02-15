const { Tag } = require("../models");

const tagData = [
  {
    id: 1,
    tag_name: "MSRP",
  },
  {
    id: 2,
    tag_name: "Sale",
  },
  {
    id: 3,
    tag_name: "Discount",
  },
  {
    id: 4,
    tag_name: "Discontinued",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
