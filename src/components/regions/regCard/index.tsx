import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

interface props{
    name:string;
}
const RegCard = ({name}:props)=>{

    return (
        <>
            <div className={styles.card}>
                <Link to={`/pokedex/${name.toLocaleLowerCase()}`} className={styles.link}>
                    <img src={`/images/${name.toLocaleLowerCase()}.svg`} alt={name} />
                    <p>{name}</p>
                </Link>
            </div>
        </>
    )
}
export default RegCard;