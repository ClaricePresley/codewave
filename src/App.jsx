import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { StoriesHope } from "./components/StoriesHope";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <StoriesHope />
    </BrowserRouter>
  );
}

export default App;
