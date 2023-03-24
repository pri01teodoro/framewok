import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../components/Erro/Erro.module.css"


export default function Page404(){

    return (
        <>
            < Header />

            <div className={styles.config}>
                <p className={styles.title}>Página não encontrada :(</p>
                <img className={styles.img} src="erro.png" alt="Imagem de uma cartela de ovo com um quebrado"/>
            </div>

            



            <Footer />

        </>
    )
}
