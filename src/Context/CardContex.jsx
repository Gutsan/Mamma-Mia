/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
// import { calculateTotal } from "../logic/function";
export const CardContex = createContext({});

export function CardContexProvider({ children }) {
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  const [totalOrder, setTotalOrder] = useState(0);
  const [countOrder, setCountOrder] = useState(0);

  const generateIdOrder = (size, id) => id + size;
  const addNewOrder = (newIdOrder, size, name, price, quantity, total) => {
    const newOrder = {
      idOrder: newIdOrder,
      size: size,
      name: name,
      priceOrder: price,
      quantity: quantity,
      total: total,
    };
    setOrder([...order, newOrder]);
  };
  const modfOrder = (indexOrder, newQuantity) => {
    const newOrder = structuredClone(order);
    newOrder[indexOrder].quantity += newQuantity;
    newOrder[indexOrder].total =
      newOrder[indexOrder].quantity * newOrder[indexOrder].priceOrder;
    setOrder(newOrder);
  };
  const addOrderCart = (IdPizza, name, size, price, quantity, total) => {
    const newIdOrder = generateIdOrder(size, IdPizza);
    const indexOrder = order.findIndex((or) => or.idOrder === newIdOrder);
    if (indexOrder === -1) {
      addNewOrder(newIdOrder, size, name, price, quantity, total);
    } else {
      modfOrder(indexOrder, quantity, price);
    }
  };
  const deleteOrder = (index) => {
    const newOrder = structuredClone(order);
    newOrder.splice(index, 1);
    setOrder(newOrder);
  };

  const clearOrder = () => {
    setOrder([]);
  };
  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      let count = 0;
      order.forEach((ord) => {
        total += ord.total;
        count += ord.quantity;
      });
      setTotalOrder(total);
      setCountOrder(count);
    };
    calculateTotal();
  }, [order]);

  useEffect(() => {
    const saveDataLocalStorage = (order) => {
      localStorage.setItem("cart", JSON.stringify(order));
    };
    saveDataLocalStorage(order);
  }, [order]);

  return (
    <CardContex.Provider
      value={{
        order,
        totalOrder,
        countOrder,
        addNewOrder,
        addOrderCart,
        modfOrder,
        deleteOrder,
        clearOrder,
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
