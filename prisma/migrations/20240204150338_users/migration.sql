/*
  Warnings:

  - Added the required column `active` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePhoto` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remember` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "secondName" TEXT NOT NULL,
    "profilePhoto" TEXT NOT NULL,
    "remember" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_users" ("id") SELECT "id" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
