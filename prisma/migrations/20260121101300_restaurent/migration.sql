-- CreateTable
CREATE TABLE "Restaurent" (
    "restaurent_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "offers" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurent_restaurent_id_key" ON "Restaurent"("restaurent_id");
