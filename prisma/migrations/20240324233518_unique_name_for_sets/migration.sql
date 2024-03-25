/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Set` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Set_name_key` ON `Set`(`name`);
