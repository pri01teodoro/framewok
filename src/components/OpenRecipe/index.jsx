import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./OpenRecipe.module.css"

import axios from "axios";

export default function OpenRecipe(titulo) {

    const router = useRouter();
    const { id } = router.query


    const [receita, setReceita] = useState
        ({});

    useEffect(() => {
        //Consultar API
        axios.get(`/api/receitas/${id}`)
            .then(resposta => setReceita
                (resposta.data));
    }, [router])

    return (
        <>

            <div>
                <img className={styles.container__img} src={receita.capaImg} alt={receita.descricao} />
                <h1 className={styles.box__title}>{receita.titulo}</h1>
            </div>
            <main className={styles.container__main}>
                <div className={styles.container__icon}>
                    <div className={styles.icon}>
                        <img src="/relogio.svg" alt="ícone de um relógio" />
                        {receita.tempoPreparo} minutos
                    </div>

                    <div className={styles.icon}>
                        <img src="/comida.svg" alt="ícone de um relógio" />
                        {receita.porcoes} porções
                    </div>
                </div>
            </main>




        </>
    )
}