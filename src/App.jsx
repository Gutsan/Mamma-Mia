import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CardContexProvider } from "./Context/CardContex";
import { Home } from "./view/Home";
import { PizzaDetails } from "./view/PizzaDetails";
import { PizzaContexProvider } from "./Context/PizzasContext";
import { Header } from "./Components/Header";
import { Cart } from "./view/Cart";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <PizzaContexProvider>
        <CardContexProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:IdPizza" element={<PizzaDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CardContexProvider>
      </PizzaContexProvider>
    </BrowserRouter>
  );
}

export default App;
