import { createContext, useState } from "react";
export const CardContex = createContext({});

export function CardContexProvider({ Children }) {
  const [order, setOrder] = useState([]);

  return (
    <CardContex.Provider value={{ order, setOrder }}>
      {Children}
    </CardContex.Provider>
  );
}
