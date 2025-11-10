import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BePart from "./components/BePart";
import Voluntario from "./pages/Voluntario";
import Doacao from "./pages/Doacao";
import Apadrinhamento from "./pages/Apadrinhamento";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<BePart />} />
        <Route path="/voluntario" element={<Voluntario />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/apadrinhamento" element={<Apadrinhamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
