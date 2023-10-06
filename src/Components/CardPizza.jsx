import { formatter } from "../logic/function";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CardPizza = ({ id, name, img, ingredients, price }) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    const ruta = `${id}`;
    navigate(ruta);
  };
  return (
    <div className="card-menu" onClick={handleClickCard}>
      <img src={img} alt={name} className="card-menu-img" />
      <div className="card-menu-info">
        <h3 className="card-menu-title">{name.toLocaleUpperCase()}</h3>
        <p className="card-menu-det">{ingredients.join(" ")}</p>
        <button>FAMILIAR DESDE {formatter.format(price)}</button>
      </div>
    </div>
  );
};
