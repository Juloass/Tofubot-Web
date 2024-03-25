/*
  Warnings:

  - A unique constraint covering the columns `[cardId,userId]` on the table `OwnedCard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `OwnedCard_cardId_userId_key` ON `OwnedCard`(`cardId`, `userId`);
