import { IconMinus, IconPlus } from "@tabler/icons-react";
import { deleteOrder, formatter, modfOrder } from "../logic/function";
import { useContext } from "react";
import { CardContex } from "../Context/CardContex";

/* eslint-disable react/prop-types */
export const ElementCart = ({ name, quantity, total, size, price, index }) => {
  const { order, setOrder } = useContext(CardContex);
  const handleClickPlus = () => {
    const newQuantity = 1;
    modfOrder(order, index, newQuantity, price, setOrder);
  };
  const handleClickMinus = () => {
    if (quantity === 1) {
      deleteOrder(index, order, setOrder);
    } else {
      const newQuantity = -1;
      modfOrder(order, index, newQuantity, price, setOrder);
    }
  };
  return (
    <div className="element-cart">
      <div className="title-element-cart">
        <h3>{name.toLocaleUpperCase()}</h3>
        <div className="element-qty-cart">
          <button onClick={handleClickMinus}>
            <IconMinus />
          </button>
          <p>{quantity}</p>
          <button onClick={handleClickPlus}>
            <IconPlus />
          </button>
        </div>
      </div>
      <h4 className="card-menu-det ">
        {size === "mid"
          ? "Mediana"
          : size === "family"
          ? "Familiar"
          : "Extra Grande"}{" "}
        {formatter.format(price)}
      </h4>
      <p>{formatter.format(total)}</p>
    </div>
  );
};
