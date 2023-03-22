import { useEffect, useState  } from "react";
import { useRouter } from "next/router";
import axios from "axios";


export default function OpenRecipe(){
    const router = useRouter();
    const {id} = router.query;

    const [receita, setReceita] = useState({});

    useEffect(() => {
        axios.get(`api/receitas/${id}`)
            .then(resposta => setPublicacao (resposta.data))
    }, [router]);

    return (
        <>
            <p>Receita</p>
        </>
    )
}