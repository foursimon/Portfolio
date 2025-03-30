import {Header} from "./Header"
import {Inicio} from "./Inicio"
import "../css/global.css"
import "../css/header.css"
import "../css/inicio.css"

export default function Portfolio(){
    return(
        <>
            <Header />
            <main>
                <Inicio />
            </main>
        </>
    )
}