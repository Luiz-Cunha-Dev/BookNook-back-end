/*
  Warnings:

  - You are about to drop the column `grade` on the `goals` table. All the data in the column will be lost.
  - Added the required column `goal` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "entertainmentsUsers" ALTER COLUMN "userId" DROP DEFAULT,
ALTER COLUMN "entertainmentId" DROP DEFAULT,
ALTER COLUMN "grade" DROP DEFAULT,
ALTER COLUMN "comment" DROP NOT NULL,
ALTER COLUMN "comment" DROP DEFAULT,
ALTER COLUMN "comment" SET DATA TYPE TEXT;
DROP SEQUENCE "entertainmentsUsers_userId_seq";
DROP SEQUENCE "entertainmentsUsers_entertainmentId_seq";
DROP SEQUENCE "entertainmentsUsers_grade_seq";
DROP SEQUENCE "entertainmentsUsers_comment_seq";

-- AlterTable
ALTER TABLE "goals" DROP COLUMN "grade",
ADD COLUMN     "goal" INTEGER NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ALTER COLUMN "userId" DROP DEFAULT,
ALTER COLUMN "typeId" DROP DEFAULT;
DROP SEQUENCE "goals_userId_seq";
DROP SEQUENCE "goals_typeId_seq";
