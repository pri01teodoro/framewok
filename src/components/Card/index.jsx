import styles from "./Card.module.css"; //importado dentro da variável styles

export default function Card({titulo, tempoPreparo, porcoes, imagem, descricao}){

    return(
        <div className={styles.card}>{/* só pode ter um elemento html na raiz */}
            <div className={styles.image__container}>
                <img src={imagem} alt={descricao} />
                <h2 className={styles.card__title}>{titulo}</h2> {/* class é uma palavra reservada do javascript, usa-se className */}
            </div>
            <div className={styles.card__info}>
                <span>{tempoPreparo} minutos</span>
                <span>{porcoes} pessoas</span>
            </div>
        </div>
    )
}