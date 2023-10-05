import { useContext } from "react";
import { CardContex } from "../Context/CardContex";
import { ElementCart } from "./ElementCart";
import { formatter } from "../logic/function";

export const CardCart = () => {
  const { order,totalOrder } = useContext(CardContex);

  return (
    <section className="section-cart">
      <h3>TU ORDEN</h3>
      {order.map((ord) => (
        <ElementCart
          key={ord.idOrder}
          name={ord.name}
          quantity={ord.quantity}
          total={ord.total}
          size={ord.size}
          price={ord.priceOrder}
        />
      ))}
      <h3>Total</h3>
      <h2>{formatter.format(totalOrder)}</h2>
    </section>
  );
};
