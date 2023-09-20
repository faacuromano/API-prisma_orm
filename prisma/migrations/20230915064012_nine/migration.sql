/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `sell` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_nacimiento` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `product_sells` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cost` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Sell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Sell` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `product_sells` DROP FOREIGN KEY `Product_Sells_productId_fkey`;

-- DropForeignKey
ALTER TABLE `product_sells` DROP FOREIGN KEY `Product_Sells_sellId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `categoryId`,
    ADD COLUMN `category_id` INTEGER NULL,
    ADD COLUMN `cost` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sell` DROP COLUMN `productId`,
    ADD COLUMN `client_id` INTEGER NOT NULL,
    ADD COLUMN `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `total` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `fecha_nacimiento`,
    ADD COLUMN `birthdate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- DropTable
DROP TABLE `product_sells`;

-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SellConcept` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `unitPrice` INTEGER NOT NULL,
    `import` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `sell_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sell` ADD CONSTRAINT `Sell_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SellConcept` ADD CONSTRAINT `SellConcept_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SellConcept` ADD CONSTRAINT `SellConcept_sell_id_fkey` FOREIGN KEY (`sell_id`) REFERENCES `Sell`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
