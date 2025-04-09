import {Header} from "./Header"
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
                <SobreMim />
                <Habilidades />
                <Projetos />
            </main>
            <Footer />
        </>
    )
}