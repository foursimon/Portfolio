import {useState} from "react"
import { DisplayTempo } from "./DisplayTempo"
export function Tempo(props){
    const [display, setDisplay] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})
    function handleMouseOverDisplay(){
        setDisplay(prev => !prev)
    }
    return(
        <div onMouseEnter={handleMouseOverDisplay} onMouseLeave={handleMouseOverDisplay}
        onPointerMove={(e) => setPosition(prev => ({...prev, x: e.clientX, y:e.clientY}))}
            className={props.esferaGrande ? "tempo" : "tempoPequeno"}>
            <div className={props.esferaGrande ? "esfera" : "mini-esfera"}></div>
            <span>{props.title}</span>
            <span>{props.subtitle}</span>
            {display ? <DisplayTempo imagem={props.imagem} descricao={props.descricao} posicao={position}/> : undefined}
        </div>
    )
}