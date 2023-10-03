
import { useContext } from "react";
import { CardPizza } from "./CardPizza";
import { PizzaContex } from "../Context/PizzasContext";

export const Gallery = () => {
  const { pizzas } = useContext(PizzaContex);

  return (
    <>
      <h2 className="titleSection">Pizzas</h2>
      <section className="galleryPizzas">
        {pizzas.map((pizza) => {
          return (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              img={pizza.img}
              ingredients={pizza.ingredients}
              price={pizza.price.family}
            />
          );
        })}
      </section>
    </>
  );
};
