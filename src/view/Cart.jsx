import { IconCash, IconCreditCard, IconBrandPaypal } from "@tabler/icons-react";
import { CardCart } from "../Components/cardCart";
import "./cart.css";
import { useState } from "react";


export const Cart = () => {
  const direcccion = "calle";
  const classSelect = "btn-payment inp-select";
  const classNoSelect = "btn-payment inp-no-select";
  const [isSelect, setIsSelect] = useState([false, false, false]);
  const handleClickPayment = (e) => {
  console.log(isSelect)
  if (e.target.closest("div").id === "paypal") {
    const newSelect = [true, false, false];
    setIsSelect(newSelect);
  } else if (e.target.closest("div").id === "efectivo") {
    const newSelect = [false, true, false];
    setIsSelect(newSelect);
  } else {
    const newSelect = [false, false, true];
    setIsSelect(newSelect);
  }
};

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
            <div 
            className={isSelect[0]?classSelect:classNoSelect} 
            onClick={handleClickPayment} 
            id="paypal">
              <IconBrandPaypal />
              <h4>PayPal</h4>
            </div>
            <div  
            className={isSelect[1]?classSelect:classNoSelect} 
            onClick={handleClickPayment} 
            id="efectivo">
              <IconCash />
              <h4>Efectivo</h4>
            </div>
            <div  
            className={isSelect[2]?classSelect:classNoSelect} 
            onClick={handleClickPayment} 
            id="Credit">
              <IconCreditCard />
              <h4>Tarjeta</h4>
            </div>
          </div>
          <div className="btns-cart">
            <button>Volver</button>
            <button>Confirmar pedido</button>
          </div>
        </section>
      </section>
      <CardCart />
    </main>
  );
};
