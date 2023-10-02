import { useState, useEffect } from "react";

export const usePizzas = () => {
  const [pizzas, setPizzas] = useState([
    {
      desc: "",
      id: "",
      img: "",
      ingredients: [],
      name: "",
      price: {
        mid: 0,
        family: 0,
        xg: 0,
      },
    },
  ]);

  const getInfoPizzas = async () => {
    const response = await fetch("/dbPizzas.json");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getInfoPizzas();
  }, []);

  return { pizzas, setPizzas };
};
