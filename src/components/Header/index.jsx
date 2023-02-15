import styles from "./Header.module.css"

export default function Header(){ //function Header()

    return(
        <header>
            <div>
                <img src="/frigideira.svg" 
                alt="Imagem de uma frigideira" />
             </div>
             <div>
                <h1>Fritando Ovo</h1>
                <h2>Receitas fáceis</h2>
             </div>
        </header>
    )
}



//export default Header