import { Link } from "react-router-dom";
import { ButtonCart } from "./ButtomCart";
import { Searcher } from "./Searcher";
import { CardAddress } from "./cardAddress";
import { Modal } from "./Modal";
import { useContext } from "react";
import { UserDataContex } from "../Context/UserDataContex";
import { FormUser } from "./FormUser";

export const Header = () => {
  const { showModal, setShowModal } = useContext(UserDataContex);
  const handleClickClose = () => {
    setShowModal(false);
  };
  return (
    <header>
      <Link to="/">
        <img
          src="https://www.papajohns.cl/static/media/papa-johns-logo-new-green.7687df4033dcc23e20cbe22df8af5d1c.svg"
          alt="Logo-PapaJohns"
        />
      </Link>
      <Searcher />
      <CardAddress />
      <ButtonCart />
      {showModal ? (
        <Modal>
          <FormUser />
          <button className="btn-save" onClick={handleClickClose}>
            Acpetar
          </button>
        </Modal>
      ) : (
        ""
      )}
    </header>
  );
};
