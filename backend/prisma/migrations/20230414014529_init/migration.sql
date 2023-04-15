-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "pokedexNumber" INTEGER NOT NULL,
    "imgName" INTEGER NOT NULL,
    "generation" INTEGER NOT NULL,
    "evolutionStage" INTEGER NOT NULL,
    "Type1" TEXT NOT NULL,
    "Type2" TEXT,
    "atc" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "sta" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);
