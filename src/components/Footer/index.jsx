import styles from "./Footer.module.css"

export default function Footer(){

    return (
        <footer className={styles.card}>
            <div className={styles.container}>
                <img src="/frig.svg" alt="Vetor de uma frigideira com ovo"/>
                <div className={styles.container__font}>
                    <div className={styles.font}>Fritando ovo - Receitas fáceis</div> 
                    <div className={styles.font}>2022</div>
                </div>
            </div>
        </footer>
    )
}