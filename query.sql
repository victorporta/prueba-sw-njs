CREATE DATBASE softek;
CREATE TABLE `softek`.`people` (
  `id` VARCHAR(36) NOT NULL,
  `birth_year` VARCHAR(45) NULL,
  `eye_color` VARCHAR(45) NULL,
  `gender` VARCHAR(45) NULL,
  `hair_color` VARCHAR(255) NULL,
  `height` BLOB NULL,
  `homeworld` VARCHAR(45) NULL,
  `mass` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `deleted_at` DATETIME NULL,
  PRIMARY KEY (`id`));
