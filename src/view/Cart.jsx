import { IconCash, IconCreditCard } from "@tabler/icons-react";
import { CardCart } from "../Components/cardCart";

export const Cart = () => {
  const direcccion = "calle";
  return (
    <main>
      <section className="container-details-cart">
        <section className="card-entrega">
          <h3>DETALLE DE ENTREGA</h3>
          <div>{direcccion}</div>
        </section>
        <section>
          <h3>DATOS PERSONALES</h3>
          <div>
            <input type="text" />
            <input type="email" />
            <input type="number" />
            <></>
          </div>
        </section>
        <section>
          <h3>MÉTODOS DE PAGO</h3>
          <div>
            <img
              src="https://www.svgrepo.com/show/517750/mercado-pago.svg"
              alt="mercadoPago"
            />
          </div>
          <div>
            <img
              src="https://iconape.com/wp-content/files/cz/352546/png/webpay-logo.png"
              alt="mercadoPago"
            />
          </div>
          <div>
            <IconCash />
          </div>
          <div>
            <IconCreditCard />
          </div>
        </section>
      </section>
      <CardCart />
    </main>
  );
};
