import { Prisma } from '.prisma/client';
import prismaClient from '../../prisma';

interface BuscarRequest {
  page?: number;
  name?: string;
  Type1?: string;
  Type2?: string;
  pageSize?: number;
}

class BuscarPokemonService {
  async execute({ page = 1, name, Type1, Type2, pageSize = 10 }: BuscarRequest) {

    //tipagem do tipo where para realizar buscas
    const where: Prisma.PokemonWhereInput = {};
    
    //verifica se algum params foi passado, se sim adicios ao objeto where
    if (name) {
      where.name = name;
    }
    if (Type1) {
      where.Type1 = Type1;
    }
    if (Type2) {
      where.Type2 = Type2;
    }

    //responsavel pela paginacao da API
    const skip = (page - 1) * pageSize;
    const take = pageSize;

    //retornar os dados de 10 em 10 de acordo com a pagina, exemplo: pagina 1 = 1 a 10, pagina 2 = 11 a 20
    const pokemonList = await prismaClient.pokemon.findMany({
      where,
      skip,
      take,
    });

    //retorna todos os pokemons idependente da pagina
    const pokemonListAll = await prismaClient.pokemon.findMany({
      where
    });

    const result = {
      pokemonList,
      pokemonListAll
    };
    
    return result;
    
  }
}

export { BuscarPokemonService };
