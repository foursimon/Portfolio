import {Header} from "./Header"
import {Inicio} from "./Inicio"
import {SobreMim} from "./SobreMim"
import {Habilidades} from "./Habilidades"
import {Projetos} from "./Projetos"
import {Footer} from "./Footer"
import "../assets/css/global.css"
import "../assets/css/header.css"

export default function Portfolio(){
    return(
        <>
            <Header />
            <main>
                <Inicio />
                <SobreMim />
                <Habilidades />
                <Projetos />
                <Footer />
            </main>
        </>
    )
}