/* eslint-disable react/prop-types */
import { IconX } from "@tabler/icons-react";
import { useContext } from "react";
import { UserDataContex } from "../Context/UserDataContex";
import { useNavigate } from "react-router-dom";

export const Modal = ({ children }) => {
  const { setShowModal } = useContext(UserDataContex);
  const navigate = useNavigate();
  const handleClickClose = () => {
    setShowModal(false);
    navigate("/");
  };
  return (
    <div className="Overfly">
      <div className="modal">
        <button onClick={handleClickClose} className="btn-cerrar">
          <IconX />
        </button>
        {children}
      </div>
    </div>
  );
};
