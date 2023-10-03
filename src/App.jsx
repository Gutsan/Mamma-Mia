import "./App.css";
import { CardContexProvider } from "./Context/CardContex";
import { Home } from "./view/Home";
function App() {
  return (
    <CardContexProvider>
      <Home />
    </CardContexProvider>
  );
}

export default App;
