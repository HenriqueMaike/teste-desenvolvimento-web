import { Request, Response } from "express";
import { DeletePokemonService } from "../../services/pokemon/DeletePokemonService";

class DeletePokemonController{
    async handle(req: Request, res: Response){

        const id = Number(req.query.id!);

        const deletePokemonService = new DeletePokemonService();

        const deletePokemon = await deletePokemonService.execute(id);

        return res.json(deletePokemon);

    }
}

export {DeletePokemonController}