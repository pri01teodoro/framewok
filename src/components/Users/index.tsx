import { useEffect, useState } from "react";
import axios from "axios";

export default function Users(){
    
    const [usuarios, setUsuarios] = useState([]);
    const url = "http://localhost:3010/usuarios";

    useEffect( () => {
        axios.get(url).then(resposta => setUsuarios(resposta.data));
    }, []);

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Nome</th>
            </tr>
                <td>{usuarios.id}</td>
        </table>

    )
}