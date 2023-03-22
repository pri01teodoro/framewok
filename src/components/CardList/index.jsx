import { useEffect, useState } from "react";
import Card from "../Card";
import styles from "../CardList/CardList.module.css";
import axios from "axios";

export default function CardList(){

    const [receitas, setReceitas] = useState([]);


    const url = "http://localhost:3010/receitas";

    useEffect( () => {
        axios.get(url).then(resposta => setReceitas(resposta.data)); //data serve para pegar os dados
    }, []); //o [] vazio engloba tudo


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