import { Request, Response } from "express";
import { BuscarPokemonService } from "../../services/pokemon/BuscarPokemonService";

interface BuscarRequest{
    page?: number
    name?: string;
    Type1?: string;
    Type2?: string;
}

class BuscarPokemonController{
    async handle(req: Request, res: Response){

        //item passados por query parans para buscar por pokemon 
        const { page, name, Type1, Type2 } = req.query as BuscarRequest;

        const listPokemonService = new BuscarPokemonService();

        const pokemonList = await listPokemonService.execute({
            page,
            pageSize: 10, //de quanto em quanto item serao exibidos por pagina
            name, 
            Type1, 
            Type2
        });

        return res.json(pokemonList);

    }
}

export {BuscarPokemonController} 