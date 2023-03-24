import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./OpenRecipe.module.css"

import axios from "axios";

export default function OpenRecipe(titulo){

    const router = useRouter();
    const {id} = router.query


    const [receita, setReceita] = useState
    ({});

    useEffect(() => {
        //Consultar API
        axios.get(`/api/receitas/${id}`)
        .then(resposta => setReceita
            (resposta.data));
    },[router])

    return (
        <>
            <div>
                <div className={styles.container__title}>
                    <Image 
                        src={receita.imagem}
                        alt={receita.descricao}
                        width= "387"
                        height= "297"
                    />
                </div>
            </div>
        </>
    )
}