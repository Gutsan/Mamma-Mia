import { useEffect, useState } from "react";
import { dataPizzas } from "./datos";
import { Gallery } from "./Components/gallery";
import "./App.css"
function App() {
const [dataPizza, setDataPizza]=useState()


  return (
    <Gallery/>
  )
}

export default App
