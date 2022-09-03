import Head from "../../components/common/Head"
import { useParams } from "react-router-dom"
import styles from "./styles.module.scss"
import ArrowLeft from "../../components/common/ArrowLeft";
import Logo from '../../assets/logo.svg';
import { Search } from "react-feather";
import { useEffect, useState } from "react";
import PokeCard from "../../components/pokedex/PokeCard";


interface Pokemon{
    entry_number: number,
    pokemon_species:{
        name:string
    }
}
const Pokedex = () => {
    const { name } = useParams()
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [search, setSearch] = useState('')
    const filteredPokemons = search.length > 0
    ? pokemons.filter((pokemon) => pokemon.pokemon_species.name.includes(search.toLocaleLowerCase()))
    : [];

    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch(`https://pokeapi.co/api/v2/pokedex/${name!.toLocaleLowerCase()}`)
            return data.json()
        }
        fetchData().then((data)=>{
            setPokemons(data.pokemon_entries)
        }).catch(err=>console.log(err))

    },[pokemons])

    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <ArrowLeft to="/regions"/>
                    <img src={Logo} alt="Logo" />
                    <div className={styles.searchContainer}>
                        <input 
                            className={styles.search} 
                            type="text" 
                            placeholder="Pikachu, Ditto, Abra" 
                            onChange={e => setSearch(e.target.value)}
                            value={search}
                            />
                        <button>
                            <Search className={styles.searchIcon} color='white'/>
                        </button>
                    </div>
                </div>
               <main className={styles.cardsSection}>
                    {
                        search.length > 0 ? (
                            filteredPokemons.map((pokemon)=>(
                                <PokeCard name={pokemon.pokemon_species.name} key={pokemon.entry_number} regionName={`${name}`}/>
                             ))
                        ) : (
                            pokemons.map((pokemon)=>(
                                <PokeCard name={pokemon.pokemon_species.name} key={pokemon.entry_number} regionName={`${name}`}/>
                             ))
                        )
                    }
               </main>
            </div>
        </>
    )
}
export default Pokedex