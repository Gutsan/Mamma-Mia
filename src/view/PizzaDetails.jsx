import { useParams } from "react-router-dom"
import { useContext } from "react"
import { PizzaContex } from "../Context/PizzasContext"
import { formatter } from "../logic/function"
export const PizzaDetails=()=>{
    const {pizzas}=useContext(PizzaContex)
    const {IdPizza}=useParams()
    const index=pizzas.findIndex(pizza=>pizza.id===IdPizza)
    console.log(index)
    const {desc, id, img,ingredients,name,price}=pizzas[index]

    return(
        <div className="card-pizza-details">
        <img src={img} alt={name} />
        <div className="containInfo">
          <h3>{name.toLocaleUpperCase()}</h3>
          <p>{ingredients.join(" ")}</p>
          <button >
            FAMILIAR DESDE {formatter.format(price.family)}
          </button>
        </div>
      </div>
    )
}