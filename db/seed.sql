INSERT INTO
  Category (id, category_name)
VALUES
  (1, "Mens"),
  (2, "Womens"),
  (3, "Boys"),
  (4, "Girls"),
  (5, "Kids");
INSERT INTO
  Product
VALUES
  (1, "Pants", 35.00, 12, 1),
  (2, "Shirts", 17.00, 7, 1),
  (3, "Dresses", 35.00, 12, 2),
  (4, "blouses", 35.00, 12, 2),
  (5, "Shoes-boys", 35.00, 12, 3),
  (6, "Shoes-girls", 35.00, 12, 4),
  (7, "Pacifiers", 35.00, 12, 5);
INSERT INTO
  Tag
VALUES
  (1, "MSRP"),
  (2, "Sale"),
  (3, "Discount"),
  (4, "Discontinued");
INSERT INTO
  ProductTag
VALUES
  (1, 1, 1),
  (2, 1, 2),
  (3, 2, 4),
  (4, 2, 2),
  (5, 3, 3),
  (6, 6, 3),
  (7, 7, 4);