import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { StoriesHope } from "./components/StoriesHope";
import BePart from "./components/BePart";
import VoluntaryForm from "./components/VoluntaryForm";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <StoriesHope />
              <BePart />
              <VoluntaryForm />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;