import {Tempo} from "./subcomponentes/Tempo"
import dados from "../../dadosLinhaTempo.js"
import "../css/sobreMim.css"
export function SobreMim() {
    const tempoComponent = dados.map(dado => <Tempo key={dado.id} {...dado}/>
    )
    return (
        <article className="sobre-article" id="sobre">
            <section className="sobre-container">
                <h2 className="section-title">Sobre mim</h2>
                <p>
                    Me chamo Giovanni Alves Valieri, nasci em 2004 na cidade de São Paulo, 
                    mas me mudei para Campinas em 2019. Tenho 20 anos de idade e possuo ensino superior completo em A.D.S.
                    Em 2023, comecei minha graduação em Análise e Desenvolvimento de Sistemas. Durante minha formação acadêmica, 
                    estudei sobre programação, orientação a objetos, estruturas de sistemas, documentação de um projeto, 
                    qualidade de sistemas e muito outros tópicos, além de ser responsável em gerenciar meu grupo durante os 
                    trabalhos da faculdade, planejando cronogramas, designando tarefas e sempre estar disposto a receber feedbacks da minha 
                    própria equipe.
                    Completei minha graduação em 2024, e hoje estou em busca de conseguir um emprego na área, pois procuro me 
                    aprimorar mais e colocar meus conhecimentos em prática.
                </p>
            </section>
            <section className="tempo-container">
                <h2 className="section-title">Linha do Tempo</h2>
                <div className="linha-container">
                    <div className="linha"></div>
                    {tempoComponent}
                </div>
            </section>
        </article>
    )
}