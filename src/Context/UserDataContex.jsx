/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const UserDataContex = createContext({});

export function UserContexProvider({ children }) {
  const [userData, SetUserData] = useState(
    JSON.parse(localStorage.getItem("userData")) ?? {
      name: "",
      email: "",
      tel: "",
      address: "",
    }
  );
  useEffect(() => {
    const saveDataLocalStorage = (userData) => {
      localStorage.setItem("userData", JSON.stringify(userData));
    };
    saveDataLocalStorage(userData);
  }, [userData]);
  const [showModal, setShowModal] = useState(false);
  return (
    <UserDataContex.Provider
      value={{ userData, SetUserData, showModal, setShowModal }}
    >
      {children}
    </UserDataContex.Provider>
  );
}
