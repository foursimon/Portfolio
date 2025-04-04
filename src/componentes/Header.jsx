import {useState} from "react"
import {Inicio} from "./Inicio"
export function Header(){
    const [menuVisivel, setMenuVisivel] = useState(false)
    return(
        <header>
            <section className="header-section">
                <div className="header-title-container">
                    <h1>Giovanni</h1>
                    <div><span>Alves</span><span>Valieri</span></div>
                </div>

                <nav className="header-nav">
                    <ul className={menuVisivel ? "nav-list show-nav" : "nav-list"}>
                        <li className="list-item"><a href="#inicio">Início</a></li>
                        <li className="list-item"><a href="#sobre">Sobre mim</a></li>
                        <li className="list-item"><a href="#habilidades">Habilidades</a></li>
                        <li className="list-item"><a href="#projetos">Projetos</a></li>
                        <li className="list-item"><a href="#contato">Contato</a></li>
                    </ul>
                </nav>
                <div className={menuVisivel ? "menu-btn clicked" : "menu-btn"} 
                    onClick={() => setMenuVisivel(prevMenu => !prevMenu)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </section>
            <Inicio />
        </header>
    )
}