import {Header} from "./Header"
import {Inicio} from "./Inicio"
import {SobreMim} from "./SobreMim"
import {Habilidades} from "./Habilidades"
import "../css/global.css"
import "../css/header.css"
import "../css/inicio.css"
import "../css/sobreMim.css"
import "../css/habilidades.css"

export default function Portfolio(){
    return(
        <>
            <Header />
            <main>
                <Inicio />
                <SobreMim />
                <Habilidades />
            </main>
        </>
    )
}