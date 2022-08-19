import Head from "../../components/common/Head"
import styles from "./styles.module.scss"
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'react-feather';
import GenCard from "../../components/pokedex/genCard";
import ArrowLeft from "../../components/common/ArrowLeft";

const Pokedex = () => {
    return (
        <>
            <Head title="Pokedex" />
            <div className={styles.page}>
                <div className={styles.header}>
                    <ArrowLeft to="/"/>
                </div>
                <div className={styles.cards}>
                    <GenCard name="Kanto" genNum={0}/>
                    <GenCard name="Johto" genNum={1}/>
                    <GenCard name="Hoenn" genNum={2}/>
                    <GenCard name="Sinnoh" genNum={3}/>
                    <GenCard name="Unova" genNum={4}/>
                    <GenCard name="Kalos" genNum={5}/>
                    <GenCard name="Alola" genNum={6}/>
                    <GenCard name="Galar" genNum={7}/>
                </div>
            </div>
        </>
    )
}
export default Pokedex