import { useEffect, useState } from "react";
import Card from "../Card";
import styles from "../CardList/CardList.module.css";
import axios from "axios";

export default function CardList() {

    const [cards, setCards] = useState([]);


    useEffect(() => {
        axios.get('/api/receitas').then(resposta => setCards(resposta.data)); //data serve para pegar os dados
    }, []); //o [] vazio engloba tudo


    return (
        <div className={styles.cardList}>
            {cards.map(receita => (
                <Card
                    key={receita.id}
                    id={receita.id}
                    titulo={receita.titulo}
                    tempoPreparo={receita.tempoPreparo}
                    porcoes={receita.porcoes}
                    imagem={receita.imagem}
                />
            ))}

        </div>
    )
}