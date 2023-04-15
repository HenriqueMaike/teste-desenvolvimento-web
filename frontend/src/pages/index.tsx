import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/home.module.scss'
import { FormEvent, useEffect, useState } from 'react';
import api from '@/services/api';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/buttom';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { RiSearchLine } from "react-icons/ri";

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

export default function Home() {

  const [pokemons, setPokemons] = useState<DadosPokemons[]>([]);

  //variaveis passadas pelos params
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');

  //variaveis responsaveis pelas buscas 
  const [buscarName, setBuscarName] = useState('');
  const [buscarType1, setBuscarType1] = useState('');
  const [buscarType2, setBuscarType2] = useState('');

  const [pages, setPages] = useState(page);


  //funcao reponsavel pela requisicoes
  useEffect(()=>{
    async function handlePage(){
      await api.get('pokemon', {
        params:{
          page: page,
          name: name,
          Type1: type1,
          Type2: type2
        }
      }).then((response) => {
        setPokemons(response.data.pokemonList); //retorna os itens por pagina
        setPages(Math.ceil(response.data.pokemonListAll.length / 10)); //retorna todos os items a calcula quantas pagina existem 
      })
      .catch(() => {

      });
    }

    window.scrollTo(0, 0);

    handlePage();

  },[page, pages, name, type1, type2]) 


  //funcao responsavel por pular para proxima pagina
  function nextPage(){
    const currentPage = page;

    if(currentPage < pages){
      setPage(currentPage + 1);
    }
  }
  //funcao responsavel por retornar a pagina anterior
  function prevPage(){
    const currentPage = page;

    if(currentPage >  1){
      setPage(currentPage - 1);
    }
  }

  //funcao responsavel por controlar os itens pesquisados
  function buscarParams(e: FormEvent){
    e.preventDefault();

    if(buscarName || buscarType1 || buscarType2){
      setName(buscarName);
      setType1(buscarType1);
      setType2(buscarType2);
    }
    else{
      setName('');
      setType1('');
      setType2('');
    }
  }

  return (
    <>
      <Head>
        <title>Pokemon GO</title>
        <meta name="description" content="Cadastro e lista de Pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.container}>

      <div className={styles.filtros}>
          <div className={styles.inputs}>
            <form onSubmit={buscarParams}>
              <div className={styles.input}>
                <Input
                  placeholder='Buscar Personagem'
                  value={buscarName}
                  onChange={(e) => setBuscarName(e.target.value)}
                />
                <Input
                  placeholder='Buscar Type 1'
                  value={buscarType1}
                  onChange={(e) => setBuscarType1(e.target.value)}
                />
                <Input
                  placeholder='Buscar Type 2'
                  value={buscarType2}
                  onChange={(e) => setBuscarType2(e.target.value)}
                />
                <button type='submit'><RiSearchLine/></button>
              </div>
            </form>
          </div>
      </div>
      
      <div className={styles.containerChild}>

      {pokemons.map((itens)=>{
              return(
                  <div className={styles.characters} key={itens.id}>
                    <article>
                      <div>
                        <Link href={`pokemon/${itens.id}`}>
                          <Image 
                                width={250}
                                height={250}
                                src={'/pokemon.png'} 
                                alt={itens.name}
                              />
                        </Link>
                            
                          <strong>{itens.name}</strong>
                          <Link href={`pokemon/${itens.id}`}>Detalhes</Link>
                      </div>
                    </article>
                  </div>
                )  
              })
            }
      </div>

      <div>
          <div className={styles.pagination}>
            <Button onClick={prevPage}>Prev</Button>
            <span> Page {page} de {pages} </span>
            <Button onClick={nextPage}>Next</Button>
          </div>
      </div>


      </main>

      <Footer/>
    </>
  )
}
