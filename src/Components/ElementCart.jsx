import { formatter } from "../logic/function";

/* eslint-disable react/prop-types */
export const ElementCart = ({ name, quantity, total }) => {
  return (
    <div className="element-Cart">
      <div className="title-element">
        <h3>{name.toLocaleUpperCase()}</h3>
        <div className="element-qty">
          <button>-</button>
          <p>{quantity}</p>
          <button>+</button>
        </div>
      </div>
      <p></p>
      <p>{formatter.format(total)}</p>
    </div>
  );
};
