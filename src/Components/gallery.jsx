import { usePizzas } from "../Hooks/PizzaHook";
import { CardPizza } from "./CardPizza";

export const Gallery = () => {
  const { pizzas } = usePizzas();

  return (
    <>
      <h2 className="titleSection">Pizzas</h2>
      <section className="galleryPizzas">
        {pizzas.map((pizza) => {
          return (
            <CardPizza
              key={pizza.id}
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
