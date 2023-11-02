-- AlterTable
ALTER TABLE `product` ADD COLUMN `proveedores_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `sell` MODIFY `client_id` INTEGER NULL,
    MODIFY `user_id` INTEGER NULL;

-- CreateIndex
CREATE INDEX `fk_product_proveedores1_idx` ON `product`(`proveedores_id`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `fk_product_proveedores1` FOREIGN KEY (`proveedores_id`) REFERENCES `proveedores`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
