import CardList from "../components/CardList";
import Header from "../components/Header";
import Pagination from "../components/Pagination";




export default function Home() {

  const paginacao = [
    {id: 1, link: "#", numero: 1 },
    {id: 2, link: "#", numero: 2 },
    {id: 3, link: "#", numero: 3 },
    {id: 4, link: "#", numero: 4 },
  ]

  return (
    <>      
    <Header />
        
    <CardList />
    
    {paginacao.map(pagina =>(
      <Pagination 
      key={pagina.id}
      link={pagina.link} 
      numero={pagina.numero}/>
    ))}


    </>
  )
}
