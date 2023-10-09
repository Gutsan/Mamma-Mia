import { useContext } from "react";
import { CardContex } from "../Context/CardContex";
import { ElementCart } from "./ElementCart";
import { formatter } from "../logic/function";
import { IconTrash } from "@tabler/icons-react";

export const CardCart = () => {
  const { order, totalOrder, countOrder, clearOrder } = useContext(CardContex);

  return (
    <section className="section-cart">
      <div className="header-cart">
        <h3 className="title-cart">TU ORDEN</h3>
        <span className="badge-count">{countOrder}</span>
        <button className="btn-trash" onClick={clearOrder}>
          <IconTrash />
        </button>
      </div>

      {order.map((ord, index) => (
        <ElementCart
          key={ord.idOrder}
          name={ord.name}
          quantity={ord.quantity}
          total={ord.total}
          size={ord.size}
          price={ord.priceOrder}
          index={index}
          idOrder={ord.idOrder}
        />
      ))}
      <h3>Total</h3>
      <h2>{formatter.format(totalOrder)}</h2>
    </section>
  );
};
