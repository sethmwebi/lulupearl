/*
  Warnings:

  - You are about to drop the column `desc` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[description]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_desc_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "desc",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_description_key" ON "Product"("description");
