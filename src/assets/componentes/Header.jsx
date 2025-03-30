import {useState} from "react"

export function Header(){
    const [menuVisivel, setMenuVisivel] = useState(false)
    return(
        <header>
            <div className="header-title-container">
                <h1>Giovanni</h1>
                <div><span>Alves</span><span>Valieri</span></div>
            </div>

            <nav className="header-nav">
                <ul className={menuVisivel ? "nav-list show-nav" : "nav-list"}>
                    <li className="list-item"><a href="#inicio">Início</a></li>
                    <li className="list-item"><a href="#">Sobre mim</a></li>
                    <li className="list-item"><a href="#">Habilidades</a></li>
                    <li className="list-item"><a href="#">Projetos</a></li>
                    <li className="list-item"><a href="#">Contato</a></li>
                </ul>
            </nav>
            <div className={menuVisivel ? "menu-btn clicked" : "menu-btn"} 
                onClick={() => setMenuVisivel(prevMenu => !prevMenu)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header>
    )
}