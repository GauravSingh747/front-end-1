import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Banner from "./components/Banner";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Sco from "./pages/Sco";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/sco" element={<Sco />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
