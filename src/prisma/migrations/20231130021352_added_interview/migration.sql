/*
  Warnings:

  - You are about to drop the column `inteviewDate` on the `Application` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "inteviewDate",
ADD COLUMN     "offerDate" TIMESTAMP(3),
ADD COLUMN     "rejectedDate" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Interview" (
    "id" SERIAL NOT NULL,
    "applicationId" INTEGER NOT NULL,
    "interviewDate" TIMESTAMP(3) NOT NULL,
    "interviewType" TEXT NOT NULL,
    "interviewer" TEXT,
    "notes" TEXT,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
