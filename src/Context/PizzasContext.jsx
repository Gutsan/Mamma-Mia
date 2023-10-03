/* eslint-disable react/prop-types */
import { createContext } from "react";
import { usePizzas } from "../Hooks/PizzaHook";
export const PizzaContex = createContext({});

export function PizzaContexProvider({ children }) {
    const { pizzas } = usePizzas();

  return (
    <PizzaContex.Provider value={{ pizzas }}>
      {children}
    </PizzaContex.Provider>
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
