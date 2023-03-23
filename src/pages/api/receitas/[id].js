import { receitas } from "../../../../dados";

export default function ReceitasId(req, res){

    const { id } = req.query;

    const receitaFiltrada = receitas.
    find(p => p.id == id)

    return res.status(200).json(receitaFiltrada)
}