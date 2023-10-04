import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CardContexProvider } from "./Context/CardContex";
import { Home } from "./view/Home";
import { PizzaDetails } from "./view/PizzaDetails";
import { PizzaContexProvider } from "./Context/PizzasContext";
import { Header } from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      <PizzaContexProvider>
        <CardContexProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:IdPizza" element={<PizzaDetails />} />
          </Routes>
        </CardContexProvider>
      </PizzaContexProvider>
    </BrowserRouter>
  );
}

export default App;
