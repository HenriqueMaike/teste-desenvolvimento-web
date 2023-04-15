import { Router } from "express";
import { BuscarPokemonController } from "./controllers/pokemon/BuscarPokemonController";
import { CreatePokemonController } from "./controllers/pokemon/CreatePokemonController";
import { DeletePokemonController } from "./controllers/pokemon/DeletePokemonController";
import { ListPokemonController } from "./controllers/pokemon/ListPokemonController";
import { UpdatePokemonController } from "./controllers/pokemon/UpdatePokemonCOntroller";

const router = Router();

//rotas responsaveis pela solicitacoes 

router.post('/create', new CreatePokemonController().handle)
router.put('/update', new UpdatePokemonController().handle)
router.delete('/remove', new DeletePokemonController().handle)
router.get('/pokemon', new BuscarPokemonController().handle)
router.get('/pokemon/:id', new ListPokemonController().handle)

export {router}