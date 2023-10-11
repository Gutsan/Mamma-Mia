import { IconBike } from "@tabler/icons-react";
import { useContext } from "react";
import { UserDataContex } from "../Context/UserDataContex";

export const CardAddress = () => {
  const { setShowModal, userData } = useContext(UserDataContex);
  const handleClickModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="card-address no-mobil" onClick={handleClickModal}>
        <h6>
          <IconBike /> Delivery
        </h6>
        <p>
          {userData.address === "" ? "Ingrese su dirección" : userData.address}
        </p>
      </div>
    </>
  );
};
