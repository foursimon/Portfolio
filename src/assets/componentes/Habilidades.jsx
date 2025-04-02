import {Habilidade} from "./subcomponentes/Habilidade"
import dadosHabilidades from "../../dadosHabilidades"
export function Habilidades(){
    const dadosOrdenados = dadosHabilidades.sort((a, b) => b.nivel - a.nivel)
    return(
        <section className="habilidades-section">
            <h2 className="section-title">Minhas habilidades</h2>
            <section className="habilidades-container">
                {dadosOrdenados.map(dado => <Habilidade key={dado.id} {...dado} />)}
            </section>
        </section>
    )
}