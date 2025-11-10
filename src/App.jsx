import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { StoriesHope } from "./components/StoriesHope";
import BePart from "./components/BePart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <StoriesHope />
      <BePart />
    </BrowserRouter>
  );
}

export default App;
