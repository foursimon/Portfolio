import dadosProjetos from "../../dadosProjetos.js"
import "../css/projetos.css"
export function Projetos(){
    const projetos = dadosProjetos.map(dado => (
        <section key={dado.id} className="projeto-section">
                <p>{dado.descricao}</p>
                <div className="projeto-container">
                    <h3>{dado.nome}</h3>
                    <div className="projeto-img-container">
                        <a href={dado.link} target="_blank"><img src={dado.imagem.src} alt={dado.imagem.alt} /></a>
                    </div>
                </div>
        </section>
    ))
    return (
        <article className="projeto-article">
            <h2 className="section-title">Meus projetos - destaques</h2>
            {projetos}
        </article>
    )
}