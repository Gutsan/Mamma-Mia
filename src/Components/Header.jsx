import { ButtonCart } from "./ButtomCart"
import { Searcher } from "./Searcher"
import { CardAddress } from "./cardAddress"

export const Header=()=>{
    return (
        <header>
        <img src="https://www.papajohns.cl/static/media/papa-johns-logo-new-green.7687df4033dcc23e20cbe22df8af5d1c.svg" alt="Logo-PapaJohns" />
        <Searcher/>
        <CardAddress/>
        <ButtonCart/>
        </header>
    )
}