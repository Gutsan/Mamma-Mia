/* eslint-disable react/prop-types */
export const CardPizza = ({ name, img, ingredients, price }) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return (
    <div className="cardPizza">
      <img src={img} alt={name} />
      <div className="containInfo">
        <h3>{name.toLocaleUpperCase()}</h3>
        <p>{ingredients.join(" ")}</p>
        <button>FAMILIAR DESDE {formatter.format(price)}</button>
      </div>
    </div>
  );
};
