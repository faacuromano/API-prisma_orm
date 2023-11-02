/*
  Warnings:

  - You are about to drop the column `category_id` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `cost` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `birthdate` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sell` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sellconcept` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `sell` DROP FOREIGN KEY `Sell_client_id_fkey`;

-- DropForeignKey
ALTER TABLE `sell` DROP FOREIGN KEY `Sell_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sellconcept` DROP FOREIGN KEY `SellConcept_product_id_fkey`;

-- DropForeignKey
ALTER TABLE `sellconcept` DROP FOREIGN KEY `SellConcept_sell_id_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `category_id`,
    DROP COLUMN `cost`,
    ADD COLUMN `categoryId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `birthdate`;

-- DropTable
DROP TABLE `client`;

-- DropTable
DROP TABLE `sell`;

-- DropTable
DROP TABLE `sellconcept`;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
