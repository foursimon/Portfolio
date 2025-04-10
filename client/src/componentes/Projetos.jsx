import "../assets/css/projetos.css"
import imagemPadrao from "../assets/images/design/404.png"
import {useState, useEffect} from "react"
import axios from "axios"
export function Projetos(){
    const [projetos, setProjetos] = useState([])
    async function buscarApi(){
        const opcoes = {
            method: "GET",
            url: "https://portfolio-tw88.onrender.com/api",
            mode: "cors"
        }
        const resposta = await axios.request(opcoes)
        const lista = resposta.data.map(dado => (
            <section key={dado.Id} className="projeto-section">
                    <p>{dado.Description}</p>
                    <div className="projeto-container">
                        <h3>{dado.Name}</h3>
                        <div className="projeto-img-container">
                            <a href={dado.Html_url} target="_blank"><img src={dado.Imagem ? dado.Imagem : imagemPadrao} /></a>
                        </div>
                    </div>
            </section>
        ))
        setProjetos(lista)
    }
    useEffect(() =>{
        buscarApi()
    }, [])

    return (
        <article id="projetos" className="projeto-article">
            <h2 className="section-title">Meus projetos - destaques</h2>
            
            {projetos.length > 0 ? projetos : <div className="loader"></div>}
        </article>
    )
}