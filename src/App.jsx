import { Gallery } from "./Components/gallery";
import "./App.css";
import { CardContexProvider } from "./Context/CardContex";
function App() {
  return (
    <CardContexProvider>
      <Gallery />
    </CardContexProvider>
  );
}

export default App;
