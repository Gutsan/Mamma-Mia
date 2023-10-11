import { IconCash, IconCreditCard, IconBrandPaypal } from "@tabler/icons-react";
import { CardCart } from "../Components/cardCart";
import "./cart.css";
import { useContext, useState } from "react";
import { FormUser } from "../Components/FormUser";
import { useNavigate } from "react-router-dom";
import { CardContex } from "../Context/CardContex";
import { Modal } from "../Components/Modal";
import { UserDataContex } from "../Context/UserDataContex";

export const Cart = () => {
  const classSelect = "btn-payment inp-select";
  const classNoSelect = "btn-payment inp-no-select";
  const [isSelect, setIsSelect] = useState([false, false, false]);
  const handleClickPayment = (e) => {
    console.log(isSelect);
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
  const navigate = useNavigate();
  const HandleClickBack = () => {
    navigate("/");
  };
  const { countOrder, clearOrder } = useContext(CardContex);
  const { showModal, setShowModal } = useContext(UserDataContex);
  const [message, setMessage] = useState({ title: "", message: "" });
  const HandleClickConfirm = () => {
    if (countOrder === 0) {
      setMessage({
        title: "No se puede procesar pedido",
        message: "Carro vacio",
      });
      setShowModal(true);
    } else {
      setMessage({
        title: "Orden en camino",
        message: "Tu pedido esta siendo procesado",
      });
      setShowModal(true);
      clearOrder();
    }
  };
  return (
    <main>
      <section className="container-details-cart">
        <section className="card-delivery">
          <FormUser />
        </section>
        <section className="card-delivery">
          <h3>MÉTODOS DE PAGO</h3>
          <div className="payment-method">
            <div
              className={isSelect[0] ? classSelect : classNoSelect}
              onClick={handleClickPayment}
              id="paypal"
            >
              <IconBrandPaypal />
              <h4>PayPal</h4>
            </div>
            <div
              className={isSelect[1] ? classSelect : classNoSelect}
              onClick={handleClickPayment}
              id="efectivo"
            >
              <IconCash />
              <h4>Efectivo</h4>
            </div>
            <div
              className={isSelect[2] ? classSelect : classNoSelect}
              onClick={handleClickPayment}
              id="Credit"
            >
              <IconCreditCard />
              <h4>Tarjeta</h4>
            </div>
          </div>
          <div className="btns-cart">
            <button onClick={HandleClickBack}>Volver</button>
            <button onClick={HandleClickConfirm}>Confirmar pedido</button>
          </div>
          {showModal ? (
            <Modal>
              <h2>{message.title}</h2>
              <p>{message.message}</p>
            </Modal>
          ) : (
            ""
          )}
        </section>
      </section>
      <CardCart />
    </main>
  );
};
