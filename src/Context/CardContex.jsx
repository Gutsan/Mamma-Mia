/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const CardContex = createContext({});

export function CardContexProvider({ children }) {
  const [order, setOrder] = useState([]);

  return (
    <CardContex.Provider value={{ order, setOrder }}>
      {children}
    </CardContex.Provider>
  );
}
// {
//   product: "",
//   size: "",
//   type: "",
//   quanty: 0,
//   price: 0,
//   total: 0,
// },
