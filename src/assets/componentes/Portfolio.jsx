import {Header} from "./Header"
import {Inicio} from "./Inicio"
import {SobreMim} from "./SobreMim"
import "../css/global.css"
import "../css/header.css"
import "../css/inicio.css"
import "../css/sobreMim.css"

export default function Portfolio(){
    return(
        <>
            <Header />
            <main>
                <Inicio />
                <SobreMim />
            </main>
        </>
    )
}