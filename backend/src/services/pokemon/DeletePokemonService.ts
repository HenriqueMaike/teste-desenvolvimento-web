import prismaClient from "../../prisma";


class DeletePokemonService{
    async execute(id: number){

        const deletePokemon = await prismaClient.pokemon.delete({
            where:{
                id: id
            }
        })

        return deletePokemon;

    }
}

export {DeletePokemonService}