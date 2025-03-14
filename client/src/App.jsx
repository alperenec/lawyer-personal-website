import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Diğer sayfalar için Route'lar buraya eklenecek */}
      </Routes>
    </Router>
  );
}

export default App;
