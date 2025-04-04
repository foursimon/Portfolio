import {useState} from "react"
import { Display } from "./Display"
export function Tempo(props){
    const [display, setDisplay] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    function handleMouseOverDisplay(){
        setDisplay(prev => !prev)
    }
    return(
        <div onMouseEnter={handleMouseOverDisplay} onMouseLeave={handleMouseOverDisplay}
        onPointerMove={(e) => setPosition({x: e.clientX, y:e.clientY})}
            className={props.esferaGrande ? "tempo" : "tempoPequeno"}>
            <div className={props.esferaGrande ? "esfera" : "mini-esfera"}></div>
            <span>{props.title}</span>
            <span>{props.subtitle}</span>
            {display ? <Display imagem={props.imagem} descricao={props.descricao} posicao={position}/> : undefined}
        </div>
    )
}