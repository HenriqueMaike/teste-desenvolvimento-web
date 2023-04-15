import prismaClient from "../../prisma";

class ListPokemonService {
  async execute(id: number) {
    //realizar a busca do pokemon por id paraso por params da URL
    const pokemon = await prismaClient.pokemon.findUnique({
      where: { 
        id 
      },
      select: {
        id: true,
        name: true,
        pokedexNumber: true,
        imgName: true,
        generation: true,
        evolutionStage: true,
        Type1: true,
        Type2: true,
        atc: true,
        def: true,
        sta: true,
      },
    });

    return pokemon;
  }
}

export { ListPokemonService };
