import { receitas } from "../../../../dados";

export default function ReceitasId(req, res){
    const { id } = req.query;
    const receita = receitas.find(r => r.id == id);

    res.status(200).json(receita);
}