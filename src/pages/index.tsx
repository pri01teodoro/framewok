import CardList from "../components/CardList";
import Header from "../components/Header";




export default function Home() {

  const receitasApi = [
    {id: 1, titulo: "Arroz com ovo", tempoPreparo: "25", porcoes: "2", imagem:"/roscovo.png", descricao: "Imagem de um prato de arroz com ovo"},
    {id: 2, titulo: "Ovo com arroz e pepino", tempoPreparo: "20", porcoes: "1", imagem: "/roscopepino.png", descricao: "Imagem de um prato de arroz com ovo"},
    {id: 3, titulo: "Ovo de codorna", tempoPreparo:"25", porcoes: "2", imagem: "/codorna.png", descricao: "Imagem de ovos de um prato com ovos de codorna"}
    
  ]
  return (
    <>
      <Header 
      />
      
      <CardList receitas={receitasApi} />
    </>
  )
}
