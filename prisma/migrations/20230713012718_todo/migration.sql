-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
