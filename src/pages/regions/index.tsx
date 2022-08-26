import styles from "./styles.module.scss"
import RegCard from "../../components/regions/regCard";
import ArrowLeft from "../../components/common/ArrowLeft";

const Regions = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.header}>
                    <ArrowLeft to="/"/>
                </div>
                <div className={styles.cards}>
                    <RegCard name="Kanto" urlName="Kanto"/>
                    <RegCard name="Johto" urlName="original-johto"/>
                    <RegCard name="Hoenn" urlName="Hoenn"/>
                    <RegCard name="Sinnoh" urlName="original-sinnoh"/>
                    <RegCard name="Unova" urlName="original-unova"/>
                    <RegCard name="Kalos" urlName="kalos-central"/>
                    <RegCard name="Alola" urlName="original-alola"/>
                    <RegCard name="Galar" urlName="Galar"/>
                </div>
            </div>
        </>
    )
}
export default Regions