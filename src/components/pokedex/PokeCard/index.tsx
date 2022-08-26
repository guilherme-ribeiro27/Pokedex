import { useEffect, useState } from 'react';
import styles from './styles.module.scss'

interface props{
    name: string;
}
const PokeCard = ({name}:props) => {
    const [pokemon, setPokemon] = useState({id:'',name:'',
    sprites:{   
        other:{ 
            "official-artwork": { 
                "front_default":''
            }
        }
    }, types: [
        {   
            type: { 
                name:''
            }
        }
    ]})
    const [pokemonType, setPokemonType] = useState('')
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            return data.json()
        }
        fetchData().then((data)=>{
            setPokemon(data)
            setPokemonType(data.types)
        }).catch(err=>console.log(err))
    },[])
    return (
        <>
            <div className={styles.card}>
                <img src={`${pokemon.sprites.other['official-artwork']['front_default']}`} alt="" loading='lazy' className={styles.cardImg}/>
                <p>#{pokemon.id.toString().padStart(3,0)}</p>
                <p className={styles.pokeName}>{pokemon.name}</p>
                <div className={styles.types}>
                {
                    pokemon.types.map((type:any)=>(
                        <div className={`${styles[type.type.name]} ${styles.type}`} key={type.type.name} >{type.type.name}</div>
                    ))
                }
                </div>
            </div>
        </>
    )
}
export default PokeCard;