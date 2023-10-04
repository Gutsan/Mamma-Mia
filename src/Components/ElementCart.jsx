import { IconMinus, IconPlus } from "@tabler/icons-react";
import { formatter } from "../logic/function";

/* eslint-disable react/prop-types */
export const ElementCart = ({ name, quantity, total, size,price }) => {
  const handleClickPlus = () => (quantity = quantity + 1);
  const handleClickMinus = () =>
    quantity === 1 ? (quantity = 1) : (quantity = quantity - 1);

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
      <h4>{size==="mid"?"Mediana":size==="famiy"?"Familiar":"Extra Grande"}   {formatter.format(price)}</h4>
      <p>{formatter.format(total)}</p>
    </div>
  );
};
