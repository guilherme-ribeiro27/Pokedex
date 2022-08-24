import Head from "../../components/common/Head"
import styles from "./styles.module.scss"
import RegCard from "../../components/regions/regCard";
import ArrowLeft from "../../components/common/ArrowLeft";

const Regions = () => {
    return (
        <>
            <Head title="Regions" />
            <div className={styles.page}>
                <div className={styles.header}>
                    <ArrowLeft to="/"/>
                </div>
                <div className={styles.cards}>
                    <RegCard name="Kanto" />
                    <RegCard name="Johto" />
                    <RegCard name="Hoenn" />
                    <RegCard name="Sinnoh" />
                    <RegCard name="Unova" />
                    <RegCard name="Kalos" />
                    <RegCard name="Alola" />
                    <RegCard name="Galar" />
                </div>
            </div>
        </>
    )
}
export default Regions