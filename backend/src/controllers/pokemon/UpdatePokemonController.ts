import { Request, Response } from "express";
import { UpdatePokemonService } from "../../services/pokemon/UpdatePokemonService";

class UpdatePokemonController{
    async handle(req: Request, res: Response){

        const {id, name, pokedexNumber, imgName, generation, evolutionStage, Type1, Type2, atc, def, sta} = req.body;

        const updatePokemonService = new UpdatePokemonService()

        const pokemon = await updatePokemonService.execute({
            id,
            name, 
            pokedexNumber, 
            imgName, 
            generation, 
            evolutionStage, 
            Type1, 
            Type2, 
            atc, 
            def, 
            sta
        })

        return res.json(pokemon)
    }
}

export {UpdatePokemonController}