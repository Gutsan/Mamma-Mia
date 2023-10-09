import { IconCash, IconCreditCard } from "@tabler/icons-react";
import { CardCart } from "../Components/cardCart";
import { IconBrandPaypal } from "@tabler/icons-react";
import "./cart.css";

export const Cart = () => {
  const direcccion = "calle";
  return (
    <main>
      <section className="container-details-cart">
        <section className="card-delivery">
          <h3>DETALLE DE ENTREGA</h3>
          <p>{direcccion}</p>
        </section>
        <section className="card-delivery">
          <h3>DATOS PERSONALES</h3>
          <div className="form-dat-user">
            <input
              type="text"
              className="inp-info-user"
              placeholder="Tu nombre"
            />
            <input
              type="email"
              className="inp-info-user"
              placeholder="Tu correo"
            />
            <input
              type="tel"
              className="inp-info-user"
              placeholder="Tu teléfono"
            />
            <></>
          </div>
        </section>
        <section className="card-delivery">
          <h3>MÉTODOS DE PAGO</h3>
          <div className="payment-method">
            <div className="btn-payment">
              <IconBrandPaypal />
              <h4>PayPal</h4>
            </div>
            <div className="btn-payment">
              <IconCash />
              <h4>Efectivo</h4>
            </div>
            <div className="btn-payment">
              <IconCreditCard />
              <h4>Tarjeta</h4>
            </div>
          </div>
          <button>Confirmar pedido</button>
        </section>
      </section>
      <CardCart />
    </main>
  );
};
