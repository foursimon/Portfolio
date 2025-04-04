import linkedin from "../assets/images/design/linkedin.png"
import github from "../assets/images/design/github.png"
import eu from "../assets/images/trajetoria/eu.jpg"
import "../assets/css/inicio.css"
export function Inicio(){
    return(
        <section className="inicio" id="inicio">
            <div className="inicio-container">
                <p>Prazer em conhecer você, eu sou</p>
                <h1>Giovanni Alves Valieri</h1>
                <div className="links-container">
                    <a className="link" href="https://www.linkedin.com/in/giovanni-valieri-b81453260/" target="_blank">
                    <img src={linkedin} alt="logo do LinkedIn com tamanho pequeno" />Veja meu perfil no LinkedIn</a>
                    <a className="link" href="https://github.com/foursimon" target="_blank">
                        <img src={github} alt="logo do Github com tamanho pequeno" />Veja meu perfil no GitHub</a>
                </div>
            </div>
            <div className="img-container">
                <img src={eu} alt="selfie do autor do portfólio do peito para cima, usando moletom cinza e óculos de grau."/>
            </div>
        </section>
    )
}