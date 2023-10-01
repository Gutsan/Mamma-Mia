import { dataPizzas } from "../datos"
export const Gallery=()=>{

return(
    <>
    <h2>Pizzas</h2>
    {
        dataPizzas.pizzas.map((pizza)=>{
            return(
            <div className="cardPizza">
            <img src={pizza.src} alt={pizza.alt} />
            <h3>{pizza.nombre.toLocaleUpperCase()}</h3>
            <p>{pizza.ingredientes.join(" ")}</p>
            <h4>{pizza.precio}</h4>
            </div>
            )
        })
    }</>

)

}