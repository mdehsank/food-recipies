import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Trainding from "./component/Trainding";
import Contact from "./component/contact";

import ProductDetail from "./component/ProductDeatail";

function App() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setFood(data.recipes);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trending" element={<Trainding />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
