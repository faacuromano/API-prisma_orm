/*
  Warnings:

  - Added the required column `deuda` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` ADD COLUMN `deuda` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sell` ADD COLUMN `estadoPago` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `tipoPago` VARCHAR(191) NOT NULL DEFAULT 'efectivo';
