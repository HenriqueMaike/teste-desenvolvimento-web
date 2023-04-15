import { Header } from '@/components/Header';
import { Input } from '@/components/ui/input';
import api from '@/services/api';
import {useState, FormEvent} from 'react'
import styles from './styles.module.scss';

export default function Cadastrar(){

    const [name, setName] = useState('')
    const [pokedexNumber, setPokedexNumber] = useState(0)
    const [imgName, setImgName] = useState(0)
    const [generation, setGeneration] = useState(0)
    const [evolutionStage, setEvolutionStage] = useState(0)
    const [Type1, setType1] = useState('')
    const [Type2, setType2] = useState('')
    const [atc, setAtc] = useState(0)
    const [def, setDef] = useState(0)
    const [sta, setSta] = useState(0)


    //realizar a requisicao para cadastrar os personagens
    async function handleRegister(event: FormEvent){
        event.preventDefault();

        //verifica os itens obrigatorios no banco, sendo o type2 nao obrigatorio e a imgName receber o mesmo que a pokedexNumber
        if(name === '' || pokedexNumber == 0 || generation === 0 || 
            evolutionStage === 0 || Type1 === '' || atc === 0 || def === 0 || sta === 0){
            alert('Preencha todos os campos com * !')
            return;
        }

        await api.post('create', {
            name,
            pokedexNumber,
            imgName: pokedexNumber,
            generation,
            evolutionStage,
            Type1,
            Type2,
            atc,
            def,
            sta
        })

        alert('Cadastrado com sucesso!')
        setName('')
        setPokedexNumber(0)
        setImgName(0)
        setGeneration(0)
        setEvolutionStage(0)
        setType1('')
        setType2('')
        setAtc(0)
        setDef(0)
        setSta(0)
    }

    return(
        <>
        <Header/>
        <div className={styles.container}>
            <div className={styles.containerCad}>
                <form onSubmit={handleRegister}>
                    <div>
                        <label>Nome: </label>
                        <Input
                            type="text"
                            placeholder='Digite o Nome'
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Pokedex Number: </label>
                        <Input
                            type="number"
                            placeholder='Digite o pokedex Number'
                            value={pokedexNumber}
                            onChange={(e) => setPokedexNumber(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Generation: </label>
                        <Input
                            type="number"
                            placeholder='Digite o generation'
                            value={generation}
                            onChange={(e) => setGeneration(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Evolution Stage: </label>
                        <Input
                            type="number"
                            placeholder='Digite o evolution Stage'
                            value={evolutionStage}
                            onChange={(e) => setEvolutionStage(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Type 1: </label>
                        <Input
                            type="text"
                            placeholder='Digite o Type1'
                            value={Type1}
                            onChange={(e)=> setType1(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Type 2: </label>
                        <Input
                            type="text"
                            placeholder='Digite o Type2'
                            value={Type2}
                            onChange={(e)=> setType2(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>ATC: </label>
                        <Input
                            type="number"
                            placeholder='Digite o ATC'
                            value={atc}
                            onChange={(e) => setAtc(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>DEF: </label>
                        <Input
                            type="number"
                            placeholder='Digite o DEF'
                            value={def}
                            onChange={(e) => setDef(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>STA: </label>
                        <Input
                            type="number"
                            placeholder='Digite o STA'
                            value={sta}
                            onChange={(e) => setSta(Number(e.target.value))}
                        />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        </>
    )
}