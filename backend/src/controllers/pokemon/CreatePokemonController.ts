import {Request, Response} from 'express'
import { CreatePokemonService } from '../../services/pokemon/CreatePokemonService';

class CreatePokemonController{
    async handle(req: Request, res: Response){

    const {name, pokedexNumber, imgName, generation, evolutionStage, Type1, Type2, atc, def, sta} = req.body;

    const createPokemonService = new CreatePokemonService();

    const pokemon = await createPokemonService.execute({
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

export {CreatePokemonController}