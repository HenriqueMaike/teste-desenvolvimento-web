import api from "@/services/api";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from './styles.module.scss'

import { RiDeleteBin6Line } from "react-icons/ri";
import { Header } from "@/components/Header";

interface DadosPokemons{
  id: number;
  name: string;
  pokedexNumber: number;
  imgName: number;
  generation: number
  evolutionStage: number;
  Type1: string;
  Type2: string;
  atc: number;
  def: number;
  sta: number;
}

export default function Pokemon(){

    const router = useRouter();
    const { id } = router.query;

    const [pokemons, setPokemons] = useState<DadosPokemons>({
        id: 0,
        name: "",
        pokedexNumber: 0,
        imgName: 0,
        generation: 0,
        evolutionStage: 0,
        Type1: "",
        Type2: "",
        atc: 0,
        def: 0,
        sta: 0,
    });

    //funcao que realizar a requisicao por parametro id, e retorna somente o personagem com este id
    useEffect(() => {
        async function loadCharacter() {
          await api.get(`pokemon/${id}`)
            .then((response) => {
                setPokemons(response.data);
            })
            .catch(() => {
            });
        }
    
        loadCharacter();
      }, [id, router]);


    //faz a requisicao para deletar o pokemon detalhado 
    async function Excluir(id: any){
      try{
        await api.delete('remove', {
          params: {
            id: id
          }
        })
        alert("Removido com sucesso!");
        router.push('/');
      }catch(err){
        console.log(err);
      }
    }

    return(
        <>
        <Header/>
        <div className={styles.containerCharacter}>
          <div className={styles.characters}>
            <div className={styles.character} key={pokemons.id}>
            
              <div className={styles.imagem}>
              <Image
                    width={250}
                    height={250}
                    src={'/pokemon.png'}
                    alt='pokemons'
                  />
              </div>

                <div className={styles.dados}>
                  <h2>{pokemons.name}</h2>
                  <p><strong>pokedex Number: </strong>{pokemons.pokedexNumber}</p>
                  <p><strong>Generation: </strong>{pokemons.generation}</p>
                  <p><strong>Evolution Stage: </strong>{pokemons.evolutionStage}</p>
                  <p><strong>Type 1: </strong>{pokemons.Type1}</p>
                  <p><strong>Type 2: </strong>{pokemons.Type2}</p>
                  <p><strong>ATC: </strong>{pokemons.atc}</p>
                  <p><strong>DEF: </strong>{pokemons.def}</p>
                  <p><strong>STA: </strong>{pokemons.sta}</p>
                </div>

                <div className={styles.button}>
                  <button onClick={()=>Excluir(pokemons.id)}><RiDeleteBin6Line/></button>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}