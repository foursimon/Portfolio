import email from "../images/design/email.png"
import whatsapp from "../images/design/whatsapp.png"
import linkedin from "../images/design/linkedin2.png"
import tel from "../images/design/telefone.png"
import "../css/footer.css"
export function Footer(){
    return(
        <footer id="contato">
            <section className="contato-section">
                <div className="contato-title-container">
                    <img src={tel} alt="telefone pequeno" />
                    <h2 className="section-title">Contate-me</h2>
                </div>
                <div className="contato-container">
                    <img src={email} alt="carta de mensagem pequena" />
                    <p>Email: <a href="mailto:giovannivalieri5@gmail.com">giovannivalieri5@gmail.com</a></p>
                </div>
                <div className="contato-container">
                    <img src={whatsapp} alt="carta de mensagem pequena" />
                    <p>Celular/Whatsapp: 19 99689-5763</p>
                </div>
                <div className="contato-container">
                    <img src={linkedin} alt="carta de mensagem pequena" />
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/giovanni-valieri-b81453260/" target="_blank">Giovanni Valieri</a></p>
                </div>
            </section>
            <p>©2025 Valieri.</p>
        </footer>
    )
}