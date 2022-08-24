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
    useEffect(()=>{
        const fetchData = async()=>{
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            return data.json()
        }
        fetchData().then((data)=>{
            setPokemon(data)
        }).catch(err=>console.log(err))
    },[])
    return (
        <>
            <div className={styles.card}>
                <img src={`${pokemon.sprites.other['official-artwork']['front_default']}`} alt="" loading='lazy' className={styles.cardImg}/>
                <p>#{pokemon.id.toString().padStart(3,0)}</p>
                <p>{pokemon.name}</p>
                {
                    pokemon.types.map((type:any)=>(
                        <p className={`${type.type.name}`} key={type.type.name}>{type.type.name}</p>
                    ))
                }
                
            </div>
        </>
    )
}
export default PokeCard;