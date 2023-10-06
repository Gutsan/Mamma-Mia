/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { calculateTotal } from "../logic/function";
export const CardContex = createContext({});

export function CardContexProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [countOrder, setCountOrder] = useState(0);
  useEffect(() => {
    calculateTotal(order, setTotalOrder, setCountOrder);
  }, [order]);
  return (
    <CardContex.Provider
      value={{
        order,
        setOrder,
        totalOrder,
        setTotalOrder,
        countOrder,
        setCountOrder,
      }}
    >
      {children}
    </CardContex.Provider>
  );
}
// {
//   idOrder:""
//   name: "",
//   size: "",
//   priceOrder: 0,
//   quanty: 0,
//   total: 0,
// },
