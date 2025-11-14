<<<<<<< HEAD
import React from 'react'
import QuemSomos from './QuemSomos'

export default function App() {
  return <QuemSomos />
}
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { StoriesHope } from "./components/StoriesHope";
import BePart from "./components/BePart";
import VoluntaryForm from "./components/VoluntaryForm";

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
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
>>>>>>> 711bf1394973b97bc1f424ef5ae168369f615bb3
