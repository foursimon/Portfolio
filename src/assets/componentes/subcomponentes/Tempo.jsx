import {useState} from "react"
import { DisplayTempo } from "./DisplayTempo"
export function Tempo({esferaGrande, title, children, ...resto}){
    const [display, setDisplay] = useState(false)
    function handleMouseOverDisplay(){
        setDisplay(prev => !prev)
    }
    return(
        <div onMouseEnter={handleMouseOverDisplay} onMouseLeave={handleMouseOverDisplay} 
            className={esferaGrande ? "tempo" : "tempoPequeno"}>
            <div className={esferaGrande ? "esfera" : "mini-esfera"}></div>
            <span>{title}</span>
            <span>{children}</span>
            {display ? <DisplayTempo/> : undefined}
        </div>
    )
}