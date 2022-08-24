import Head from "../../components/common/Head"
import styles from './styles.module.scss'
import Logo from '../../assets/logo.svg';
import Pokeball from '../../assets/pokeball.svg';
import Rayquaza from '../../assets/rayquaza.svg';
import { Instagram, Linkedin, GitHub } from "react-feather";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <div className={styles.page}>
                <div className={styles.content}>
                    <img className={styles.logo} src={Logo} alt="Pokémon"/>
                    <div className={styles.textContent}>
                        <p className={styles.title}>
                            Praticando React JS <br></br>com Pokemons
                        </p>
                        <p className={styles.subTitle}>
                            Projeto de pokedex por regiões utilizando a API pública da PokeAPI
                        </p>
                        <a className={styles.btn} href="/regions">
                            Go to Dex
                            <img src={Pokeball} className={styles.imga} alt="Pokeball" />
                        </a>
                        <div className={styles.socialMedias}>
                            <a href="" about="_blank" >
                                <Instagram className={styles.icon} size={35}/>
                            </a>
                            <a href="" about="_blank" >
                                <Linkedin className={styles.icon} size={35}/>
                            </a>
                            <a href="" about="_blank" >
                                <GitHub className={styles.icon} size={35}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.contentImg}>
                    <img src={Rayquaza} alt="LogoRayquaza" />
                </div>
            </div>
        </>
    )
}
export default Home