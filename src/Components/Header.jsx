import { Link } from "react-router-dom";
import { ButtonCart } from "./ButtomCart";
import { Searcher } from "./Searcher";
import { CardAddress } from "./cardAddress";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          src="https://www.papajohns.cl/static/media/papa-johns-logo-new-green.7687df4033dcc23e20cbe22df8af5d1c.svg"
          alt="Logo-PapaJohns"
        />
      </Link>
      <Searcher />
      <CardAddress />
      <ButtonCart />
    </header>
  );
};
