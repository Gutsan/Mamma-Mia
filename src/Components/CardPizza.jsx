import { useContext } from "react";
import { CardContex } from "../Context/CardContex";

/* eslint-disable react/prop-types */
export const CardPizza = ({ name, img, ingredients, price }) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });
  const {order,setOrder}=useContext(CardContex)
  const handleClick=()=>{
    const newOrder={
      idOrder:"",
      name:{name},
      price:{price},
      quantity:1,
      //total:()=>price*quantity
  }
    setOrder(...order,newOrder)
  }
  return (
    <div className="cardPizza">
      <img src={img} alt={name} />
      <div className="containInfo">
        <h3>{name.toLocaleUpperCase()}</h3>
        <p>{ingredients.join(" ")}</p>
        <button>FAMILIAR DESDE {formatter.format(price)}</button>
      </div>
    </div>
  );
};
