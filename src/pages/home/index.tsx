import Head from "../../components/common/Head"
import styles from './styles.module.scss'
import Logo from '../../assets/logo.svg';
import Pokeball from '../../assets/pokeball.svg';
import Rayquaza from '../../assets/rayquaza.svg';

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <div className={styles.page}>
                <div className={styles.content}>
                    <img className={styles.logo} src={Logo} alt="Pokémon"/>
                    <div>
                        <p className={styles.title}>
                            Praticando React JS <br></br>com Pokemons
                        </p>
                        <p className={styles.subTitle}>
                            Projeto de pokedex por regiões utilizando a API pública da PokeAPI
                        </p>
                        <button>
                            Go to Dex
                            <img src={Pokeball} className={styles.imgButton} alt="Pokeball" />
                        </button>
                        <div className={styles.socialMedias}>
                            
                        </div>
                    </div>
                </div>
                <img src={Rayquaza} className={styles.img} alt="LogoRayquaza" />
            </div>
        </>
    )
}
export default Home