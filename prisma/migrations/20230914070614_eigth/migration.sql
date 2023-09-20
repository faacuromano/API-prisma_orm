/*
  Warnings:

  - You are about to drop the column `date` on the `sell` table. All the data in the column will be lost.
  - You are about to drop the column `totalAmount` on the `sell` table. All the data in the column will be lost.
  - You are about to drop the `_productsells` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_productsells` DROP FOREIGN KEY `_ProductSells_A_fkey`;

-- DropForeignKey
ALTER TABLE `_productsells` DROP FOREIGN KEY `_ProductSells_B_fkey`;

-- AlterTable
ALTER TABLE `sell` DROP COLUMN `date`,
    DROP COLUMN `totalAmount`,
    ADD COLUMN `productId` INTEGER NULL;

-- DropTable
DROP TABLE `_productsells`;

-- CreateTable
CREATE TABLE `Product_Sells` (
    `productId` INTEGER NOT NULL,
    `sellId` INTEGER NOT NULL,
    `selledAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `isPaid` TINYINT NOT NULL,

    PRIMARY KEY (`productId`, `sellId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product_Sells` ADD CONSTRAINT `Product_Sells_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product_Sells` ADD CONSTRAINT `Product_Sells_sellId_fkey` FOREIGN KEY (`sellId`) REFERENCES `Sell`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
