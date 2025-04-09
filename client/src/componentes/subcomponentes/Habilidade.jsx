import {Star} from "./Star"
import {Display} from "./Display"
import {useState} from "react"
import "../../assets/css/habilidades.css"
export function Habilidade(props){
    const [position, setPosition] = useState({x: 0, y:0})
    function handleDisplay(){
        setDisplay(prev => !prev)
    }
    const [display, setDisplay] = useState(false)
    return(
            <div onMouseLeave={handleDisplay}
            onMouseEnter={handleDisplay} onPointerMove={(e) => setPosition({x: e.clientX, y:e.clientY})}
            className="habilidade">
            <img src={props.imagem.src} alt={props.imagem.alt} />
                <div className="nivel-container">
                    <p>{props.nome}</p>
                    <Star nivel={props.nivel} metade={props.metade}/>
                </div>
            {display ? <Display  descricao={props.descricao} posicao={position}/> : undefined}
            </div>
    )
}