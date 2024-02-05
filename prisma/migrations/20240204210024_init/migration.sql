/*
  Warnings:

  - You are about to drop the column `active` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profilePhoto` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `remember` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `secondName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL
);
INSERT INTO "new_users" ("email", "id") SELECT "email", "id" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
