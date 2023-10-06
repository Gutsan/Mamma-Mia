import { IconShoppingCart } from "@tabler/icons-react";
import { useContext } from "react";
import { CardContex } from "../Context/CardContex";
import { useNavigate } from "react-router-dom";

export const ButtonCart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };
  const { countOrder } = useContext(CardContex);
  return (
    <button className="btn-cart" onClick={handleClick}>
      <IconShoppingCart />
      <span className="num-cart">{countOrder}</span>
    </button>
  );
};
