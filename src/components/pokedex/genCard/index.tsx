import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

interface props{
    name:string;
    genNum: number;
}
const GenCard = ({name, genNum}:props)=>{

    return (
        <>
            <div className={styles.card}>
                <Link to={`/pokelist/${genNum}`} className={styles.link}>
                    <img src={`/images/${name.toLocaleLowerCase()}.svg`} alt={name} />
                    <p>{name}</p>
                </Link>
            </div>
        </>
    )
}
export default GenCard;