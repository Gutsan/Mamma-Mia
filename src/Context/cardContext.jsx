/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const FilterContext = createContext();
export function FilterPovider({ children }) {
  const [order, setOrder] = useState([
    {
      product: "",
      size: "",
      type: "",
      quanty: 0,
      price: 0,
      total: 0,
    },
  ]);
  return (
    <FilterContext.Provider value={{ order, setOrder }}>
      {children}
    </FilterContext.Provider>
  );
}
