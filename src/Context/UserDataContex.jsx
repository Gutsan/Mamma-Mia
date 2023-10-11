/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const UserDataContex = createContext({});

export function UserContexProvider({ children }) {
    const [address, SetAddress] = useState("");
    const [userData, SetUserData]=useState({name:"",email:"",tel:""})
    const [showModal, setShowModal]=useState(false)
  return (
    <UserDataContex.Provider value={{ address, SetAddress,userData, SetUserData,showModal, setShowModal }}>
      {children}
    </UserDataContex.Provider>
  );
}