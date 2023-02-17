import Card from "../Card";
import styles from "../CardList/CardList.module.css"

export default function CardList({receitas}){

    return(
      <div className={styles.cardList}>
        {receitas.map(receita => (
            <Card 
            key={receita.id}
            titulo = {receita.titulo}
            tempoPreparo = {receita.tempoPreparo}
            porcoes = {receita.porcoes}
            imagem = {receita.imagem}/>
        ))}

        </div>
    )
}