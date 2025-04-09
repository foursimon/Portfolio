const star = "★"
export function Star({nivel, metade}){
    const estrelas = Array(5).fill(star)
    const gradient={
        backgroundImage: "linear-gradient(90deg, #00F7FF 100%,#D9D9D9 0%)"
    }
    const gradient2={
        backgroundImage: "linear-gradient(90deg, #00F7FF 50%,#797979 0%)"
    }
    return (
        <div className="nivel-estrela">
            {estrelas.map((estrela, index) => {
                    if(metade && index == nivel-1){
                        return <div key={index} className="star-icon" style={gradient2}>{estrela}</div>
                    }
                    if(index < nivel){
                        return <div key={index} className="star-icon" style={gradient}>{estrela}</div>
                    }
                    return <div key={index} className="star-icon" style={{color: "#797979"}}>{estrela}</div>
                })
            }
        </div>
    )
}