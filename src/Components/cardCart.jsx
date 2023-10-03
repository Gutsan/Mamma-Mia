import { useContext } from "react";
import { CardContex } from "../Context/CardContex";
import { ElementCart } from "./ElementCart";

export const CardCart = () => {
  const { order } = useContext(CardContex);

  return (
    <>
      <h3>TU ORDEN</h3>
      {order.map((ord) => (
        <ElementCart
          key={ord.name}
          name={ord.name}
          quantity={ord.quantity}
          total={ord.total}
        />
      ))}
    </>
  );
};
