import Card from "../Card";
import styles from "../CardList/CardList.module.css"

export default function CardList(){

    return(
      <div className={styles.cardList}>
            <Card 
                titulo = "Ovo com arroz e pepino"
                tempoPreparo = "25"
                porcoes = "2"/>

            <Card 
                titulo = "Ovo de codorna"
                tempoPreparo = "15"
                porcoes = "2"/>

            <Card 
                titulo = "Ovo com abacate"
                tempoPreparo = "10"
                porcoes = "1"/>
        </div>
    )
}