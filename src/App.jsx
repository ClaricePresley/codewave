import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./components/Page.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          Component={Page}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;