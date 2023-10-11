import { IconAt, IconMapPin2, IconPhone, IconUser } from "@tabler/icons-react";
import { useContext } from "react";
import { UserDataContex } from "../Context/UserDataContex";
export const FormUser = () => {
  const { userData, SetUserData } = useContext(UserDataContex);
  const handleChange = (e) => {
    SetUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <form>
      <h2>Detalles de Entrega</h2>
      <h3>DELIVERY</h3>
      <div className="inp-modal">
        <IconMapPin2 />
        <input
          type="text"
          name="address"
          id="inp-address"
          value={userData.address}
          onChange={handleChange}
        />
        <label>Dirección</label>
      </div>
      <h3>DATOS USUARIO</h3>
      <div className="inp-modal">
        <IconUser />
        <input
          type="text"
          id="inp-name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <label>Nombre</label>
      </div>
      <div className="inp-modal">
        <IconAt />
        <input
          type="text"
          id="inp-email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label>Correo</label>
      </div>
      <div className="inp-modal">
        <IconPhone />
        <input
          type="text"
          id="inp-phone"
          name="tel"
          value={userData.tel}
          onChange={handleChange}
        />
        <label>Télefono</label>
      </div>
    </form>
  );
};
