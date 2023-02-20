import CardList from "../components/CardList";
import Header from "../components/Header";




export default function Home() {

  const receitasApi = [
    {id: 1, titulo: "Arroz com ovo", tempoPreparo: "25", porcoes: "2", imagem:"/roscovo.png", descricao: "Imagem de um prato de arroz com ovo"},
    {id: 2, titulo: "Arroz com pepino", tempoPreparo: "20", porcoes: "1", imagem: "/roscopepino.png", descricao: "Imagem de um prato de arroz com ovo"},
    
  ]
  return (
    <>
      <Header 
      />
      
      <CardList receitas={receitasApi} />
    </>
  )
}
