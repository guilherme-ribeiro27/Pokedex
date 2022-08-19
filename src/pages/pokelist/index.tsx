import Head from "../../components/common/Head"
import { Navigate, useParams } from "react-router-dom"
import styles from "./styles.module.scss"
import ArrowLeft from "../../components/common/ArrowLeft";
import Logo from '../../assets/logo.svg';
import { Search } from "react-feather";

const PokeList = () => {
    const { id } = useParams()

    return (
        <>
            <Head title="PokeList" />
            <div className={styles.page}>
                <div className={styles.header}>
                    <ArrowLeft to="/pokedex"/>
                    <img src={Logo} alt="Logo" />
                    <div className={styles.searchContainer}>
                        <input className={styles.search} type="text" placeholder="Pikachu, Ditto, Abra" />
                        <button>
                            <Search className={styles.searchIcon} color='white'/>
                        </button>
                    </div>
                </div>
               
            </div>
        </>
    )
}
export default PokeList