import { Request, Response } from "express";
import { ListPokemonService } from "../../services/pokemon/ListPokemonService";

class ListPokemonController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const listPokemonService = new ListPokemonService();

    const pokemon = await listPokemonService.execute(parseInt(id));

    return res.json(pokemon);
  }
}

export { ListPokemonController };
