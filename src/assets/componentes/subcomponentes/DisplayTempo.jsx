export function DisplayTempo({posicao, imagem, descricao}){
    return(
        <section className="display-container" style={{left: `${posicao.x + 30}px`, top:`${posicao.y - 120}px`}}>
            <div className="display-img-container"><img src={imagem.src} alt={imagem.alt} /></div>
            <div className="display-text-container">
                <p>{descricao}</p>
            </div>
        </section>
    )
}