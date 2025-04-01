import unip from "../../images/unip.png"
export function DisplayTempo(){
    return(
        <section className="display-container">
            <div className="display-img-container"><img src={unip} alt="" /></div>
            <div className="display-text-container">
                <p>Na data de 23 de janeiro de 2023, comecei a cursar Análise e Desenvolvimento de Sistemas na Unip</p>
            </div>
        </section>
    )
}