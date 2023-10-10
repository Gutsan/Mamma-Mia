/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const UserDataContex = createContext({});

export function UserContexProvider({ children }) {
    const [address, SetAddress] = useState("");
    const [userData, SetUserData]=useState({name:"",email:"",tel:""})
  return (
    <PizzaContex.Provider value={{ address, SetAddress,userData, SetUserData }}>
      {children}
    </PizzaContex.Provider>
  );
}