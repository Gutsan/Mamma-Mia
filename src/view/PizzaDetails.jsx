import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PizzaContex } from "../Context/PizzasContext";
import { formatter } from "../logic/function";
import {
  IconArrowBack,
  IconMinus,
  IconPlus,
  IconShoppingCartPlus,
} from "@tabler/icons-react";
export const PizzaDetails = () => {
  const { pizzas } = useContext(PizzaContex);
  const { IdPizza } = useParams();
  const index = pizzas.findIndex((pizza) => pizza.id === IdPizza);
  const { desc, id, img, ingredients, name, price } = pizzas[index];
  const [isSelectSize, setIsSeelectSize] = useState([false, false, false]);
  const [valuePriceSelect, SetValuePriceSelect] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const classSelect = "inp-pizza inp-select";
  const classNoSelect = "inp-pizza inp-no-select";

  useEffect(() => {
    const newTotal = quantity * valuePriceSelect;
    setTotal(newTotal);
  }, [quantity, valuePriceSelect]);

  const handleClick = (e) => {
    if (e.target.closest("div").id === "mid") {
      const newSelect = [true, false, false];
      setIsSeelectSize(newSelect);
      SetValuePriceSelect(price["mid"]);
    } else if (e.target.closest("div").id === "family") {
      const newSelect = [false, true, false];
      setIsSeelectSize(newSelect);
      SetValuePriceSelect(price["family"]);
    } else {
      const newSelect = [false, false, true];
      setIsSeelectSize(newSelect);
      SetValuePriceSelect(price["xg"]);
    }
  };
  const handleClickPlus = () => setQuantity(quantity + 1);
  const handleClickMinus = () =>
    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
  const handleclickAddCart = () => {};
  return (
    <main>
      <Link to="/" className="btn-Volver">
        <IconArrowBack /> Volver
      </Link>

      <div className="card-pizza-details">
        <img src={img} alt={name} />
        <div className="containInfo">
          <h3>{name.toLocaleUpperCase()}</h3>
          <p>{desc}</p>
          <h2>Ingredientes</h2>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <div className="secction-size">
            <div
              className={isSelectSize[0] ? classSelect : classNoSelect}
              onClick={handleClick}
              id="mid"
            >
              <p>Mediana</p>
              <p>{formatter.format(price["mid"])}</p>
            </div>
            <div
              className={isSelectSize[1] ? classSelect : classNoSelect}
              onClick={handleClick}
              id="family"
            >
              <p>Familiar</p>
              <p>{formatter.format(price["family"])}</p>
            </div>
            <div
              className={isSelectSize[2] ? classSelect : classNoSelect}
              onClick={handleClick}
              id="xg"
            >
              <p>Extra Grande</p>
              <p>{formatter.format(price["xg"])}</p>
            </div>
          </div>
          <div className="Section-addCart">
            <div className="element-qty-cart">
              <button onClick={handleClickMinus}>
                <IconMinus />
              </button>
              <p>{quantity}</p>
              <button onClick={handleClickPlus}>
                <IconPlus />
              </button>
            </div>
            <p className="total-Order">Total = {formatter.format(total)}</p>
            <button onClick={handleclickAddCart}>
              Añadir
              <IconShoppingCartPlus />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
