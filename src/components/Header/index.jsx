import styles from "./Header.module.css"

export default function Header() { //function Header()

    return (
        <header className={styles.header}>
            <div>
                <img src="/frigideira.svg"
                    alt="Imagem de uma frigideira" />
            </div>
            <div style="margin-bottom: 69px;">
                <h1 className={styles.header__title}>Fritando Ovo</h1>
                <h2 className={styles.header__subtitle}>Receitas fáceis</h2>
            </div>

        </header>

    )
}



//export default Header