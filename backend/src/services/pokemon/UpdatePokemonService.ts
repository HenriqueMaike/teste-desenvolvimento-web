import prismaClient from "../../prisma";

interface PokemonRequest{
    id: number;
    name: string;
    pokedexNumber: number;
    imgName: number;
    generation: number;
    evolutionStage: number;
    Type1: string;
    Type2: string;
    atc: number;
    def: number;
    sta: number;
}

class UpdatePokemonService{
    async execute({id, name, pokedexNumber, imgName, generation, evolutionStage, Type1, Type2, atc, def, sta}: PokemonRequest){

        const pokemon = prismaClient.pokemon.update({
            where:{
                id: id
            },
            data: {
                name: name,
                pokedexNumber: pokedexNumber,
                imgName: imgName,
                generation: generation,
                evolutionStage: evolutionStage,
                Type1: Type1,
                Type2: Type2,
                atc: atc,
                def: def,
                sta: sta
            }
        })
    
        return pokemon;

    }
}

export {UpdatePokemonService}