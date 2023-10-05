import { IconShoppingCart } from "@tabler/icons-react"
import { useContext } from "react"
import { CardContex } from "../Context/CardContex"

export  const ButtonCart=()=>{
    const {countOrder}=useContext(CardContex)
    return(
        <button className="btn-cart">
            <IconShoppingCart/>
            <span className="num-cart">{countOrder}</span>
        </button>
    )
}