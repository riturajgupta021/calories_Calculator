import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Page/Navbar";
import About from '../src/components/Page/About'
import HomePage from "./components/Page/Homepage";

import FirstPage from "./components/Page/FirstPage";

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home" element={<HomePage/>} />
       
      </Routes>
    </>
  );
};

export default App;
