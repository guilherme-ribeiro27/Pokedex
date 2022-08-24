import Head from "../../components/common/Head"
import { useParams } from "react-router-dom"
import styles from "./styles.module.scss"
import ArrowLeft from "../../components/common/ArrowLeft";
import Logo from '../../assets/logo.svg';
import { Search } from "react-feather";
import { useEffect, useState } from "react";
import PokeCard from "../../components/pokedex/PokeCard";


const Pokedex = () => {
    const { name } = useParams()
    const [pokemons, setPokemons] = useState([])
    
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
                        <input className={styles.search} type="text" placeholder="Pikachu, Ditto, Abra" />
                        <button>
                            <Search className={styles.searchIcon} color='white'/>
                        </button>
                    </div>
                </div>
               <main className={styles.cardsSection}>
                    {
                        pokemons.map((pokemon:any)=>(
                            <PokeCard name={pokemon.pokemon_species.name} key={pokemon.entry_number}/>
                        ))
                    }
               </main>
            </div>
        </>
    )
}
export default Pokedex