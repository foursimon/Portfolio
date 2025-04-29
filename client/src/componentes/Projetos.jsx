import "../assets/css/projetos.css"
import imagemPadrao from "../assets/images/design/404.png"
import dadosProjetos from "../dadosProjetos"
import {useState, useEffect} from "react"
import axios from "axios"
export function Projetos(){
    const [projetos, setProjetos] = useState([])
    console.log("renderizado")
    async function buscarApi(){
        try{
            const resposta = await axios.get("https://localhost:32769/api/Github")
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
        catch(erro){
            console.log("Não foi possível pegar os repositórios recentes no momento. Aqui está alguns repositórios em destaques:")
            const lista = dadosProjetos.map(dado => (
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