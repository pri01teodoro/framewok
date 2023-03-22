import styles from "./Card.module.css"; //importado dentro da variável styles

export default function Card({titulo, tempoPreparo, porcoes, imagem, descricao}){

    return(
        <main className={styles.cards__container}>
            <div className={styles.card}>{/* só pode ter um elemento html na raiz */}
                <div className={styles.image__container}>
                    <img src={imagem} alt={descricao}/>      
                    <h2 className={styles.card__title}>{titulo}</h2> {/* class é uma palavra reservada do javascript, usa-se className */}
                </div>
                <div className={styles.card__info}>
                    <div className={styles.info__container}>
                        <img src="/relogio.svg" alt="Relógio" />
                        <span className={styles.vector}>{tempoPreparo} minutos</span>
                    </div>
                    <div className={styles.info__container}>
                        <img src="/comida.svg" alt="Pote de comida" />
                        <span className={styles.vector}>serve {porcoes} pessoas</span>
                    </div>
                </div>
            </div>
        </main>
    )
}