import styles from "./styles.module.scss";

interface props{
    name:string;
    genNum: number;
}
const GenCard = ({name, genNum}:props)=>{
    return (
        <>
            <div className={styles.card}>
                <a href="" className={styles.link}>
                    <img src={`/images/${name.toLocaleLowerCase()}.svg`} alt={name} />
                    <p>{name}</p>
                </a>
            </div>
        </>
    )
}
export default GenCard;