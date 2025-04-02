import {useState} from "react"
import {Star} from "./subcomponentes/Star"
import dadosHabilidades from "../../dadosHabilidades"
export function Habilidades(){
    return(
        <section className="habilidades-section">
            <h2 className="section-title">Minhas habilidades</h2>
            <section className="habilidades-container">
                {dadosHabilidades.map(dado => (
                    <div key={dado.id}  className="habilidade">
                    <img src={dado.imagem.src} alt={dado.imagem.alt} />
                        <div className="nivel-container">
                            <p>{dado.nome}</p>
                            <Star {...dado}/>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}