import { useContext } from "react";
import { CardContex } from "../Context/CardContex";
import { formatter } from "../logic/function";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CardPizza = ({ id,name, img, ingredients, price }) => {
  const { order, setOrder } = useContext(CardContex);
  
  const handleClick = () => {
    const total = price;
    const newOrder = {
      idOrder: "",
      name: name,
      priceOrder: price,
      quantity: 1,
      total: total,
    };
    setOrder([...order, newOrder]);
  };
  const navigate=useNavigate()
  const handleClickCard=()=>{
      const ruta=`${id}`
      navigate(ruta)
  }
  return (
    <div className="cardPizza" onClick={handleClickCard}>
      <img src={img} alt={name} />
      <div className="containInfo">
        <h3>{name.toLocaleUpperCase()}</h3>
        <p>{ingredients.join(" ")}</p>
        <button onClick={handleClick}>
          FAMILIAR DESDE {formatter.format(price)}
        </button>
      </div>
    </div>
  );
};
