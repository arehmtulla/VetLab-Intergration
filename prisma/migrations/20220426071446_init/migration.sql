-- CreateTable
CREATE TABLE `Transaction` (
    `id` INTEGER NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(65, 30) NOT NULL,
    `payment_option` VARCHAR(191) NOT NULL,
    `transaction_date` DATETIME(3) NOT NULL,
    `currency` VARCHAR(191) NOT NULL,
    `merchant_reference` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
