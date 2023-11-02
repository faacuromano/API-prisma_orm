/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.
  - Added the required column `cost` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `categoryId`,
    ADD COLUMN `category_id` INTEGER NULL,
    ADD COLUMN `cost` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `birthdate` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `deuda` INTEGER NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proveedores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NULL,
    `direccion` VARCHAR(45) NULL,
    `telefono` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sell` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_id` INTEGER NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `total` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `estadoPago` BOOLEAN NOT NULL DEFAULT false,
    `tipoPago` VARCHAR(191) NOT NULL DEFAULT 'efectivo',

    INDEX `Sell_client_id_fkey`(`client_id`),
    INDEX `Sell_user_id_fkey`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sellconcept` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `unitPrice` INTEGER NOT NULL,
    `import` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `sell_id` INTEGER NOT NULL,

    INDEX `SellConcept_product_id_fkey`(`product_id`),
    INDEX `SellConcept_sell_id_fkey`(`sell_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Product_category_id_fkey` ON `product`(`category_id`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sell` ADD CONSTRAINT `Sell_client_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sell` ADD CONSTRAINT `Sell_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sellconcept` ADD CONSTRAINT `SellConcept_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sellconcept` ADD CONSTRAINT `SellConcept_sell_id_fkey` FOREIGN KEY (`sell_id`) REFERENCES `sell`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
