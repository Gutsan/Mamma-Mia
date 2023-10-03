/* eslint-disable react/prop-types */
export const CardAddCart = ({ name, img, ingredients, price }) => {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });
  const handleClick = () => {};

  return (
    <div className="cardAddCart">
      <img src={img} alt={name} />
      <div className="containInfo">
        <h3>{name.toLocaleUpperCase()}</h3>
        <p>{ingredients.join(" ")}</p>
        <button onClick={handleClick}>
          FAMILIAR DESDE {formatter.format(price)}
        </button>
      </div>
    </div>
  );
};
